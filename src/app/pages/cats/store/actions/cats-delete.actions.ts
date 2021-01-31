import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {CatsActionTypesEnum} from '@pages/cats/store/cats-action-types.enum';

export const deleteCatAction = createAction(
  CatsActionTypesEnum.DeleteCat,
  props<{ id: string }>()
);

export const deleteCatSuccessAction = createAction(
  CatsActionTypesEnum.DeleteCatSuccess,
  props<{ id: string }>()
);

export const deleteCatFailureAction = createAction(
  CatsActionTypesEnum.DeleteCatFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
