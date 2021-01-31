import {ICatModel} from '@api/cats/res/cat.interface';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {ICatsStateModel} from '@pages/cats/store/cats-state.interface';

export const adapter: EntityAdapter<ICatModel> = createEntityAdapter<ICatModel>();

export const catsInitialState: ICatsStateModel = adapter.getInitialState({
    isGettingCatsList: false,
    isGettingOneCat: false,
    isDeletingCat: false,
    isEditingCat: false,
    isLikingCat: false,
    isDislikingCat: false,
    isCreatingCat: false,
    validationErrors: null,
  }
);
