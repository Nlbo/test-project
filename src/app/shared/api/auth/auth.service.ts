import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUserModel} from '@api/auth/res/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  getUserInfo(id: string): Observable<IUserModel[]> {
    return this.httpClient.get<IUserModel[]>(`users?id=${id}`);
  }

  getUser(userName: string): Observable<IUserModel[]> {
    return this.httpClient.get<IUserModel[]>(`users?name=${userName}`);
  }

  register(data: IUserModel): Observable<IUserModel> {
    return this.httpClient.post<IUserModel>('users', data);
  }

}
