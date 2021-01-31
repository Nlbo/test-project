import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {IAppStateModel} from '@interfaces/app-state.interface';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adapter} from '@pages/cats/store/cats-initial.state';
import {ICatsStateModel} from '@pages/cats/store/cats-state.interface';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const catsFeatureSelector = createFeatureSelector<IAppStateModel,
  ICatsStateModel>
(AppStateTypesEnum.Cats);

export const isCreatingCatSelector = createSelector(
  catsFeatureSelector,
  (state: ICatsStateModel) => state.isCreatingCat
);

export const isGettingCatsListSelector = createSelector(
  catsFeatureSelector,
  (state: ICatsStateModel) => state.isGettingCatsList
);

export const isGettingOneCatSelector = createSelector(
  catsFeatureSelector,
  (state: ICatsStateModel) => state.isGettingOneCat
);

export const isEditingCatSelector = createSelector(
  catsFeatureSelector,
  (state: ICatsStateModel) => state.isEditingCat
);

export const isDeletingCatSelector = createSelector(
  catsFeatureSelector,
  (state: ICatsStateModel) => state.isDeletingCat
);

export const isLikingCatSelector = createSelector(
  catsFeatureSelector,
  (state: ICatsStateModel) => state.isLikingCat
);

export const isDislikingCatSelector = createSelector(
  catsFeatureSelector,
  (state: ICatsStateModel) => state.isDislikingCat
);

export const catsListSelector = createSelector(
  catsFeatureSelector,
  (state: ICatsStateModel) => selectAll(state)
);

export const catSelector = createSelector(
  catsFeatureSelector,
  (state: ICatsStateModel, id: string) => state.entities[id]
);
