import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ManageCatModel} from '@api/cats/req/manage-cat.model';
import {ICatModel} from '@api/cats/res/cat.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {Actions, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {createCatAction, createCatSuccessAction} from '@pages/cats/store/actions/cats-create.actions';
import {editCatAction, editCatSuccessAction} from '@pages/cats/store/actions/cats-edit.actions';
import {getOneCatAction} from '@pages/cats/store/actions/cats-get-one.actions';
import {Observable} from 'rxjs';
import {catSelector, isCreatingCatSelector, isEditingCatSelector} from '@pages/cats/store/selectors/cats.selectors';
import {AppHelper} from '@services/app-helper.service';
import {NzUploadFile} from 'ng-zorro-antd';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  isCreatingCat$: Observable<boolean>;
  isEditingCat$: Observable<boolean>;
  ManageTypesEnum = ManageTypesEnum;
  form = new ManageCatModel();
  ManageType = ManageTypesEnum.Add;
  fileList: NzUploadFile[] = [];
  id: string;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private actionsSubject: Actions,
    private store: Store) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.ManageType = ManageTypesEnum.Edit;
        this.id = params.id;
        this.store.dispatch(getOneCatAction({id: this.id}));
        this.store.pipe(select(catSelector, this.id)).subscribe((cat: ICatModel) => {
          if (cat) {
            this.form.formGroup.patchValue(cat);
            if (this.router.url.includes(ManageTypesEnum.Preview)) {
              this.ManageType = ManageTypesEnum.Preview;
              this.form.disableAllField();
            }
          }
        });
      } else {
        this.form.like.disable();
      }
    });
    this.initializeValues();
  }

  initializeValues() {
    this.isCreatingCat$ = this.store.pipe(select(isCreatingCatSelector));
    this.isEditingCat$ = this.store.pipe(select(isEditingCatSelector));
    this.actionsSubject.pipe(ofType(editCatSuccessAction)).subscribe(() =>
      this.router.navigate(['', 'cats', 'list']));
    this.actionsSubject.pipe(ofType(createCatSuccessAction)).subscribe(() =>
      this.router.navigate(['', 'cats', 'list']));
  }

  beforeUpload = (file: NzUploadFile) => {
    this.fileList = [];
    this.fileList.push(file);
    if (!file.url && !file.preview) {
      AppHelper.getBase64(file).then(base64 => {
        file.preview = base64;
        this.form.img.setValue(file.preview);
      });
    }
    return false;
  }

  submitForm(): void {
    switch (this.ManageType) {
      case ManageTypesEnum.Add:
        this.store.dispatch(createCatAction({request: this.form.createModel()}));
        break;
      case ManageTypesEnum.Edit:
        this.store.dispatch(editCatAction({id: this.id, request: this.form.changeModel()}));
        break;
      case ManageTypesEnum.Preview:
        break;
    }
  }
}
