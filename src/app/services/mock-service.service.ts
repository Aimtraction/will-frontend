import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
   // return this.http.get(`${environment.baseUrl}categories`);
    return this.http.get(`${environment.baseUrl}categories/level/1`);
  }

  getCategory(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}categories/id/${id}`);
  }

  getCategoriesByIds(ids: [string]): Observable<any> {
    const idsSCV = ids.join(',');
    console.log("idsSCV", idsSCV);
    return this.http.get(`${environment.baseUrl}categories/ids/${idsSCV}`);
  }


}
