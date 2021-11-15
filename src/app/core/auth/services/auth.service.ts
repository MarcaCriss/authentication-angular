import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { login } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(data: login) {
    return this._http.post(`${environment.urlBase}auth/login`, data);
  }
}
