import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {catsReducer} from '@pages/cats/store/cats.reducer';
import {CatsCreateEffects} from '@pages/cats/store/effects/cats-create.effects';
import {CatsDeleteEffects} from '@pages/cats/store/effects/cats-delete.effects';
import {CatsEditEffects} from '@pages/cats/store/effects/cats-edit.effects';
import {CatsGetOneEffects} from '@pages/cats/store/effects/cats-get-one.effects';
import {CatsListEffects} from '@pages/cats/store/effects/cats-list.effects';
import {SharedModule} from '@shared/shared.module';

import {CatsRoutingModule} from './cats-routing.module';
import {CatsComponent} from './cats.component';
import {ListComponent} from './pages/list/list.component';
import {ManageComponent} from './pages/manage/manage.component';
import {authReducer} from "@pages/auth/store/auth.reducer";
import {CatsLikeEffects} from "@pages/cats/store/effects/cats-like.effects";
import {CatsDislikeEffects} from "@pages/cats/store/effects/cats-dislike.effects";


@NgModule({
  declarations: [CatsComponent, ListComponent, ManageComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.Cats, catsReducer),
    StoreModule.forFeature(AppStateTypesEnum.Auth, authReducer),
    EffectsModule.forFeature([
      CatsListEffects,
      CatsGetOneEffects,
      CatsEditEffects,
      CatsDeleteEffects,
      CatsCreateEffects,
      CatsLikeEffects,
      CatsDislikeEffects,
    ]),
    CatsRoutingModule
  ]
})
export class CatsModule {
}
