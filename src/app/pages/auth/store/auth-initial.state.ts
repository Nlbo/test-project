import {IAuthStateModel} from '@pages/auth/store/auth-state.interface';

export const authInitialState: IAuthStateModel = {
  isLogining: false,
  isRegistering: false,
  isGettingUserInfo: false,
  user: null,
  validationErrors: null
};

