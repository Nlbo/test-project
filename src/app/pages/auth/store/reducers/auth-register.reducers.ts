import {on} from '@ngrx/store';
import {IAuthStateModel} from '@pages/auth/store/auth-state.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from '@pages/auth/store/actions/auth-register.actions';

export const register = on(
  registerAction,
  (state: IAuthStateModel): IAuthStateModel => ({
    ...state,
    isRegistering: true,
    user: null,
    validationErrors: null,
  })
);

export const registerSuccess = on(
  registerSuccessAction,
  (state: IAuthStateModel, {response}): IAuthStateModel => ({
    ...state,
    isRegistering: false,
    user: response,
    validationErrors: null,
  })
);

export const registerFailure = on(
  registerFailureAction,
  (state: IAuthStateModel, {errorResponse}): IAuthStateModel => ({
    ...state,
    isRegistering: false,
    user: null,
    validationErrors: errorResponse,
  })
);
