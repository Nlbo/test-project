import {on} from '@ngrx/store';
import {editCatAction, editCatFailureAction, editCatSuccessAction} from '@pages/cats/store/actions/cats-edit.actions';
import {adapter} from '@pages/cats/store/cats-initial.state';
import {ICatsStateModel} from '@pages/cats/store/cats-state.interface';

export const editCat = on(
  editCatAction,
  (state: ICatsStateModel): ICatsStateModel => {
    return {
      ...state,
      isEditingCat: true,
      validationErrors: null
    };
  }
);

export const editCatSuccess = on(
  editCatSuccessAction,
  (state: ICatsStateModel, {response}): ICatsStateModel => {
    return adapter.upsertOne(response, {
      ...state,
      isEditingCat: false,
      validationErrors: null,
    });
  }
);

export const editCatFailure = on(
  editCatFailureAction,
  (state: ICatsStateModel, {errorResponse}): ICatsStateModel => {
    return {
      ...state,
      isEditingCat: false,
      validationErrors: errorResponse
    };
  }
);
