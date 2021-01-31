import {on} from '@ngrx/store';
import {loginAction, loginFailureAction, loginSuccessAction} from '@pages/auth/store/actions/auth-login.actions';
import {IAuthStateModel} from '@pages/auth/store/auth-state.interface';

export const login = on(
  loginAction,
  (state: IAuthStateModel): IAuthStateModel => ({
    ...state,
    isLogining: true,
    user: null,
    validationErrors: null,
  })
);

export const loginSuccess = on(
  loginSuccessAction,
  (state: IAuthStateModel, {response}): IAuthStateModel => ({
    ...state,
    isLogining: false,
    user: response,
    validationErrors: null,
  })
);

export const loginFailure = on(
  loginFailureAction,
  (state: IAuthStateModel, {errorResponse}): IAuthStateModel => ({
    ...state,
    isLogining: false,
    user: null,
    validationErrors: errorResponse,
  })
);
