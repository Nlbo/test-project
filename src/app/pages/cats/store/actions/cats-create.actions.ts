import {HttpErrorResponse} from '@angular/common/http';
import {ICatModel} from '@api/cats/res/cat.interface';
import {createAction, props} from '@ngrx/store';
import {CatsActionTypesEnum} from '@pages/cats/store/cats-action-types.enum';

export const createCatAction = createAction(
  CatsActionTypesEnum.CreateCat,
  props<{ request: ICatModel }>()
);

export const createCatSuccessAction = createAction(
  CatsActionTypesEnum.CreateCatSuccess,
  props<{ response: ICatModel }>()
);

export const createCatFailureAction = createAction(
  CatsActionTypesEnum.CreateCatFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
