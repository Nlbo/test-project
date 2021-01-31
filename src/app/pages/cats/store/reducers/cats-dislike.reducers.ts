import {on} from '@ngrx/store';
import {adapter} from '@pages/cats/store/cats-initial.state';
import {ICatsStateModel} from '@pages/cats/store/cats-state.interface';
import {
  dislikeCatAction,
  dislikeCatFailureAction,
  dislikeCatSuccessAction
} from '@pages/cats/store/actions/cats-dislike.actions';

export const dislikeCat = on(
  dislikeCatAction,
  (state: ICatsStateModel): ICatsStateModel => {
    return {
      ...state,
      isDislikingCat: true,
      validationErrors: null
    };
  }
);

export const dislikeCatSuccess = on(
  dislikeCatSuccessAction,
  (state: ICatsStateModel, {response}): ICatsStateModel => {
    return adapter.upsertOne(response, {
      ...state,
      isDislikingCat: false,
      validationErrors: null,
    });
  }
);

export const dislikeCatFailure = on(
  dislikeCatFailureAction,
  (state: ICatsStateModel, {errorResponse}): ICatsStateModel => {
    return {
      ...state,
      isDislikingCat: false,
      validationErrors: errorResponse
    };
  }
);
