import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private api: string = 'https://coronavirus-19-api.herokuapp.com/';

  constructor(private _http: HttpClient) { }

  // public getAll(): Observable<Object> {
  //   return this._http.get(`${this.api}all`);
  // }

  public getCountries(): Observable<Object> {
    return this._http.get(`${this.api}countries`);
  }
}
