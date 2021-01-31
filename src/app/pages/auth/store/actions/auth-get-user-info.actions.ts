import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {AuthActionTypesEnum} from '@pages/auth/store/auth-action-types.enum';
import {IUserModel} from '@api/auth/res/user.interface';

export const getUserInfoAction = createAction(
  AuthActionTypesEnum.GetUserInfo,
  props<{ id: string }>()
);

export const getUserInfoSuccessAction = createAction(
  AuthActionTypesEnum.GetUserInfoSuccess,
  props<{ response: IUserModel }>()
);

export const getUserInfoFailureAction = createAction(
  AuthActionTypesEnum.GetUserInfoFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
