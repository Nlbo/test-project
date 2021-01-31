import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {SharedModule} from '@shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {EffectsModule} from '@ngrx/effects';
import {AuthLoginEffects} from '@pages/auth/store/effects/auth-login.effects';
import {authReducer} from '@pages/auth/store/auth.reducer';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.Auth, authReducer),
    EffectsModule.forFeature([AuthLoginEffects])
  ]
})

export class AdminModule {
}
