import {HttpErrorResponse} from '@angular/common/http';
import {ICatModel} from '@api/cats/res/cat.interface';
import {createAction, props} from '@ngrx/store';
import {CatsActionTypesEnum} from '@pages/cats/store/cats-action-types.enum';

export const getOneCatAction = createAction(
  CatsActionTypesEnum.GetOneCat,
  props<{ id: string }>()
);

export const getOneCatSuccessAction = createAction(
  CatsActionTypesEnum.GetOneCatSuccess,
  props<{ response: ICatModel }>()
);

export const getOneCatFailureAction = createAction(
  CatsActionTypesEnum.GetOneCatFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
