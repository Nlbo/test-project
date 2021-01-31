import {HttpErrorResponse} from '@angular/common/http';
import {ICatModel} from '@api/cats/res/cat.interface';
import {createAction, props} from '@ngrx/store';
import {CatsActionTypesEnum} from '@pages/cats/store/cats-action-types.enum';

export const likeCatAction = createAction(
  CatsActionTypesEnum.LikeCat,
  props<{ id: string, cat: ICatModel }>()
);

export const likeCatSuccessAction = createAction(
  CatsActionTypesEnum.LikeCatSuccess,
  props<{ response: ICatModel }>()
);

export const likeCatFailureAction = createAction(
  CatsActionTypesEnum.LikeCatFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
