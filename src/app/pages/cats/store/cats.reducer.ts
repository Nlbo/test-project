import {Action, createReducer} from '@ngrx/store';
import {catsInitialState} from '@pages/cats/store/cats-initial.state';
import {ICatsStateModel} from '@pages/cats/store/cats-state.interface';
import {createCat, createCatFailure, createCatSuccess} from '@pages/cats/store/reducers/cats-create.reducers';
import {deleteCat, deleteCatFailure, deleteCatSuccess} from '@pages/cats/store/reducers/cats-delete.reducers';
import {editCat, editCatFailure, editCatSuccess} from '@pages/cats/store/reducers/cats-edit.reducers';
import {getOneCat, getOneCatFailure, getOneCatSuccess} from '@pages/cats/store/reducers/cats-get-one.reducers';
import {catsList, catsListFailure, catsListSuccess} from '@pages/cats/store/reducers/cats-list.reducers';
import {likeCat, likeCatFailure, likeCatSuccess} from '@pages/cats/store/reducers/cats-like.reducers';
import {dislikeCat, dislikeCatFailure, dislikeCatSuccess} from '@pages/cats/store/reducers/cats-dislike.reducers';

const initReducer = createReducer(
  catsInitialState,
  catsList,
  catsListSuccess,
  catsListFailure,
  getOneCat,
  getOneCatSuccess,
  getOneCatFailure,
  editCat,
  editCatSuccess,
  editCatFailure,
  deleteCat,
  deleteCatSuccess,
  deleteCatFailure,
  createCat,
  createCatSuccess,
  createCatFailure,
  likeCat,
  likeCatSuccess,
  likeCatFailure,
  dislikeCat,
  dislikeCatSuccess,
  dislikeCatFailure
);

export function catsReducer(state: ICatsStateModel, action: Action) {
  return initReducer(state, action);
}
