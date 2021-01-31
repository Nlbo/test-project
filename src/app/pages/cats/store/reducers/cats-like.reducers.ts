import {on} from '@ngrx/store';
import {adapter} from '@pages/cats/store/cats-initial.state';
import {ICatsStateModel} from '@pages/cats/store/cats-state.interface';
import {likeCatAction, likeCatFailureAction, likeCatSuccessAction} from '@pages/cats/store/actions/cats-like.actions';

export const likeCat = on(
  likeCatAction,
  (state: ICatsStateModel): ICatsStateModel => {
    return {
      ...state,
      isLikingCat: true,
      validationErrors: null
    };
  }
);

export const likeCatSuccess = on(
  likeCatSuccessAction,
  (state: ICatsStateModel, {response}): ICatsStateModel => {
    return adapter.upsertOne(response, {
      ...state,
      isLikingCat: false,
      validationErrors: null,
    });
  }
);

export const likeCatFailure = on(
  likeCatFailureAction,
  (state: ICatsStateModel, {errorResponse}): ICatsStateModel => {
    return {
      ...state,
      isLikingCat: false,
      validationErrors: errorResponse
    };
  }
);
