import {createAction, props} from '@ngrx/store';
import {AuthActionTypesEnum} from '@pages/auth/store/auth-action-types.enum';
import {IUserModel} from '@api/auth/res/user.interface';
import {HttpErrorResponse} from '@angular/common/http';

export const registerAction = createAction(
  AuthActionTypesEnum.Register,
  props<{ request: IUserModel }>()
);

export const registerSuccessAction = createAction(
  AuthActionTypesEnum.RegisterSuccess,
  props<{ response: IUserModel }>()
);

export const registerFailureAction = createAction(
  AuthActionTypesEnum.RegisterFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
