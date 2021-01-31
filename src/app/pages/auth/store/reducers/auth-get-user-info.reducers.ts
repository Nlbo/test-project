import {on} from '@ngrx/store';
import {IAuthStateModel} from '@pages/auth/store/auth-state.interface';
import {
  getUserInfoAction,
  getUserInfoFailureAction,
  getUserInfoSuccessAction
} from '@pages/auth/store/actions/auth-get-user-info.actions';

export const getUserInfo = on(
  getUserInfoAction,
  (state: IAuthStateModel): IAuthStateModel => ({
    ...state,
    isGettingUserInfo: false,
    user: null,
    validationErrors: null,
  })
);

export const getUserInfoSuccess = on(
  getUserInfoSuccessAction,
  (state: IAuthStateModel, {response}): IAuthStateModel => (console.log(response), {
    ...state,
    isGettingUserInfo: false,
    user: response,
    validationErrors: null,
  })
);

export const getUserInfoFailure = on(
  getUserInfoFailureAction,
  (state: IAuthStateModel, {errorResponse}): IAuthStateModel => ({
    ...state,
    isGettingUserInfo: false,
    user: null,
    validationErrors: errorResponse,
  })
);
