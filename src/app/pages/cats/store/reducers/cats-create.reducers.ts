import {on} from '@ngrx/store';
import {
  createCatAction,
  createCatFailureAction,
  createCatSuccessAction
} from '@pages/cats/store/actions/cats-create.actions';
import {ICatsStateModel} from '@pages/cats/store/cats-state.interface';

export const createCat = on(
  createCatAction,
  (state: ICatsStateModel): ICatsStateModel => {
    return {
      ...state,
      isCreatingCat: true,
      validationErrors: null,
    };
  }
);

export const createCatSuccess = on(
  createCatSuccessAction,
  (state: ICatsStateModel): ICatsStateModel => {
    return {
      ...state,
      isCreatingCat: false,
      validationErrors: null
    };
  }
);

export const createCatFailure = on(
  createCatFailureAction,
  (state: ICatsStateModel, {errorResponse}): ICatsStateModel => {
    return {
      ...state,
      isCreatingCat: false,
      validationErrors: errorResponse
    };
  }
);
