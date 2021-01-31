import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './pages/login/login.component';
import {SharedModule} from '@shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {AuthLoginEffects} from './store/effects/auth-login.effects';
import {EffectsModule} from '@ngrx/effects';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {authReducer} from '@pages/auth/store/auth.reducer';
import {AuthRegisterEffects} from '@pages/auth/store/effects/auth-register.effects';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.Auth, authReducer
    ),
    EffectsModule.forFeature([AuthLoginEffects, AuthRegisterEffects])
  ]
})

export class AuthModule {
}
