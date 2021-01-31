import {HttpErrorResponse} from '@angular/common/http';
import {ICatModel} from '@api/cats/res/cat.interface';
import {createAction, props} from '@ngrx/store';
import {CatsActionTypesEnum} from '@pages/cats/store/cats-action-types.enum';

export const dislikeCatAction = createAction(
  CatsActionTypesEnum.DislikeCat,
  props<{ id: string, cat: ICatModel }>()
);

export const dislikeCatSuccessAction = createAction(
  CatsActionTypesEnum.DislikeCatSuccess,
  props<{ response: ICatModel }>()
);

export const dislikeCatFailureAction = createAction(
  CatsActionTypesEnum.DislikeCatFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
