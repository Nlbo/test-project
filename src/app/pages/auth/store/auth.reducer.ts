import {Action, createReducer} from '@ngrx/store';
import {IAuthStateModel} from '@pages/auth/store/auth-state.interface';
import {authInitialState} from '@pages/auth/store/auth-initial.state';
import {login, loginFailure, loginSuccess} from '@pages/auth/store/reducers/auth-login.reducers';
import {register, registerFailure, registerSuccess} from '@pages/auth/store/reducers/auth-register.reducers';
import {
  getUserInfo,
  getUserInfoFailure,
  getUserInfoSuccess
} from '@pages/auth/store/reducers/auth-get-user-info.reducers';

const initReducer = createReducer(
  authInitialState,
  login,
  loginSuccess,
  loginFailure,
  register,
  registerSuccess,
  registerFailure,
  getUserInfo,
  getUserInfoSuccess,
  getUserInfoFailure,
);

export function authReducer(state: IAuthStateModel, action: Action) {
  return initReducer(state, action);
}
