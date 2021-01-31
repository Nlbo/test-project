import {on} from '@ngrx/store';
import {
  deleteCatAction,
  deleteCatFailureAction,
  deleteCatSuccessAction
} from '@pages/cats/store/actions/cats-delete.actions';
import {adapter} from '@pages/cats/store/cats-initial.state';
import {ICatsStateModel} from '@pages/cats/store/cats-state.interface';

export const deleteCat = on(
  deleteCatAction,
  (state: ICatsStateModel): ICatsStateModel => {
    return {
      ...state,
      isDeletingCat: true,
      validationErrors: null
    };
  }
);

export const deleteCatSuccess = on(
  deleteCatSuccessAction,
  (state: ICatsStateModel, {id}): ICatsStateModel => {
    return adapter.removeOne(id, {
      ...state,
      isDeletingCat: false,
      validationErrors: null,
    });
  }
);

export const deleteCatFailure = on(
  deleteCatFailureAction,
  (state: ICatsStateModel, {errorResponse}): ICatsStateModel => {
    return {
      ...state,
      isDeletingCat: false,
      validationErrors: errorResponse
    };
  }
);
