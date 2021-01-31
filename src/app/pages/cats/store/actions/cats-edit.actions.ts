import {HttpErrorResponse} from '@angular/common/http';
import {ICatModel} from '@api/cats/res/cat.interface';
import {createAction, props} from '@ngrx/store';
import {CatsActionTypesEnum} from '@pages/cats/store/cats-action-types.enum';

export const editCatAction = createAction(
  CatsActionTypesEnum.EditCat,
  props<{ id: string, request: any }>()
);

export const editCatSuccessAction = createAction(
  CatsActionTypesEnum.EditCatSuccess,
  props<{ response: ICatModel }>()
);

export const editCatFailureAction = createAction(
  CatsActionTypesEnum.EditCatFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
