import {on} from '@ngrx/store';
import {
  getCatsListAction,
  getCatsListFailureAction,
  getCatsListSuccessAction
} from '@pages/cats/store/actions/cats-list.actions';
import {adapter} from '@pages/cats/store/cats-initial.state';
import {ICatsStateModel} from '@pages/cats/store/cats-state.interface';

export const catsList = on(
  getCatsListAction,
  (state: ICatsStateModel): ICatsStateModel => {
    return {
      ...state,
      isGettingCatsList: true,
      validationErrors: null
    };
  }
);

export const catsListSuccess = on(
  getCatsListSuccessAction,
  (state: ICatsStateModel, {response}): ICatsStateModel => {
    return adapter.addMany(response, {
      ...state,
      entities: {},
      ids: [],
      isGettingCatsList: false,
      validationErrors: null,
    });
  }
);

export const catsListFailure = on(
  getCatsListFailureAction,
  (state: ICatsStateModel, {errorResponse}): ICatsStateModel => {
    return {
      ...state,
      isGettingCatsList: false,
      validationErrors: errorResponse
    };
  }
);
