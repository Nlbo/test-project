import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAuthStateModel} from '@pages/auth/store/auth-state.interface';
import {IAppStateModel} from '@interfaces/app-state.interface';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';

export const authFeatureSelector = createFeatureSelector<IAppStateModel,
  IAuthStateModel>
(AppStateTypesEnum.Auth);

export const isLoginingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthStateModel) => authState.isLogining
);

export const isRegisteringSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthStateModel) => authState.isRegistering
);

export const userSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthStateModel) => authState.user
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthStateModel) => authState.validationErrors
);
