import {HttpErrorResponse} from '@angular/common/http';
import {ICatModel} from '@api/cats/res/cat.interface';
import {createAction, props} from '@ngrx/store';
import {CatsActionTypesEnum} from '@pages/cats/store/cats-action-types.enum';

export const getCatsListAction = createAction(
  CatsActionTypesEnum.GetCatsList
);

export const getCatsListSuccessAction = createAction(
  CatsActionTypesEnum.GetCatsListSuccess,
  props<{ response: ICatModel[] }>()
);

export const getCatsListFailureAction = createAction(
  CatsActionTypesEnum.GetCatsListFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
