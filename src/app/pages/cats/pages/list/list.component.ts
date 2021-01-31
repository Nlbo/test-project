import {Component, OnInit} from '@angular/core';
import {ICatModel} from '@api/cats/res/cat.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {select, Store} from '@ngrx/store';
import {CompaniesHelperService} from '@pages/cats/services/companies-helper.service';
import {deleteCatAction} from '@pages/cats/store/actions/cats-delete.actions';
import {getCatsListAction} from '@pages/cats/store/actions/cats-list.actions';
import {Observable} from 'rxjs';
import {catsListSelector} from '@pages/cats/store/selectors/cats.selectors';
import {IUserModel} from '@api/auth/res/user.interface';
import {userSelector} from '@pages/auth/store/selectors/auth-login.selectors';
import {likeCatAction} from '@pages/cats/store/actions/cats-like.actions';
import {dislikeCatAction} from '@pages/cats/store/actions/cats-dislike.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list$: Observable<ICatModel[]>;
  user: IUserModel;
  ManageTypesEnum = ManageTypesEnum;
  type = false;

  constructor(
    public helperService: CompaniesHelperService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getCatsListAction());
    this.list$ = this.store.pipe(select(catsListSelector));
    this.store.pipe(select(userSelector)).subscribe(user => {
      this.user = user;
    });
  }

  deleteCat(id: string) {
    this.store.dispatch(deleteCatAction({id}));
  }

  likeCat(cat) {
    this.store.dispatch(likeCatAction({
      id: cat.id, cat: {
        ...cat,
        like: [...cat.like, this.user]
      }
    }));
  }

  dislikeCat(cat) {
    this.store.dispatch(dislikeCatAction({
      id: cat.id, cat: {
        ...cat,
        like: cat.like.filter(users => users.id !== this.user.id)
      }
    }));
  }
}
