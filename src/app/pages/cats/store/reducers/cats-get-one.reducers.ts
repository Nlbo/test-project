import {on} from '@ngrx/store';
import {
  getOneCatAction,
  getOneCatFailureAction,
  getOneCatSuccessAction
} from '@pages/cats/store/actions/cats-get-one.actions';
import {adapter} from '@pages/cats/store/cats-initial.state';
import {ICatsStateModel} from '@pages/cats/store/cats-state.interface';

export const getOneCat = on(
  getOneCatAction,
  (state: ICatsStateModel): ICatsStateModel => {
    return {
      ...state,
      isGettingOneCat: true,
      validationErrors: null
    };
  }
);

export const getOneCatSuccess = on(
  getOneCatSuccessAction,
  (state: ICatsStateModel, {response}): ICatsStateModel => {
    return adapter.addOne(response, {
      ...state,
      isGettingOneCat: false,
      validationErrors: null,
    });
  }
);

export const getOneCatFailure = on(
  getOneCatFailureAction,
  (state: ICatsStateModel, {errorResponse}): ICatsStateModel => {
    return {
      ...state,
      isGettingOneCat: false,
      validationErrors: errorResponse
    };
  }
);
