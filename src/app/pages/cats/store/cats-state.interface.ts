import {HttpErrorResponse} from '@angular/common/http';
import {ICatModel} from '@api/cats/res/cat.interface';
import {EntityState} from '@ngrx/entity';

export interface ICatsStateModel extends EntityState<ICatModel> {
  isGettingCatsList: boolean;
  isGettingOneCat: boolean;
  isDeletingCat: boolean;
  isEditingCat: boolean;
  isLikingCat: boolean;
  isDislikingCat: boolean;
  isCreatingCat: boolean;
  validationErrors: HttpErrorResponse;
}
