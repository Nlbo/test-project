import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ICatModel} from '@api/cats/res/cat.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private httpClient: HttpClient) { }

  getCatsList(): Observable<ICatModel[]> {
    return this.httpClient.get<ICatModel[]>('cats');
  }

  getOneCat(id: string): Observable<ICatModel> {
    return this.httpClient.get<ICatModel>(`cats/${id}`);
  }

  createCat(data): Observable<ICatModel> {
    return this.httpClient.post<ICatModel>('cats', data);
  }

  editCat(id: string, data): Observable<ICatModel> {
    return this.httpClient.put<ICatModel>(`cats/${id}`, data);
  }

  deleteCat(id: string) {
    return this.httpClient.delete(`cats/${id}`);
  }
}
