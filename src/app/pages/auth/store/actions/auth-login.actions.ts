import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {AuthActionTypesEnum} from '@pages/auth/store/auth-action-types.enum';
import {IUserModel} from '@api/auth/res/user.interface';

export const loginAction = createAction(
  AuthActionTypesEnum.Login,
  props<{ request: any }>()
);

export const loginSuccessAction = createAction(
  AuthActionTypesEnum.LoginSuccess,
  props<{ response: IUserModel }>()
);

export const loginFailureAction = createAction(
  AuthActionTypesEnum.LoginFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
