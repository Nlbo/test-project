import {ICatsStateModel} from '@pages/cats/store/cats-state.interface';
import {IAuthStateModel} from '@pages/auth/store/auth-state.interface';

export interface IAppStateModel {
  auth: IAuthStateModel;
  cats: ICatsStateModel;
}
