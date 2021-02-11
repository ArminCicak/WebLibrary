import {​​ HttpClient }​​ from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPodaci} from '../models/login-podaci'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public postLogin(noviLogin: LoginPodaci) {​​
      return this.http.post<any>('http://weblibrary.logosoft.ba:5877/api/User/Authenticate', noviLogin);
  }​​

  public postRegister(novaRegistracija: LoginPodaci) {​​
    return this.http.post<any>('http://weblibrary.logosoft.ba:5877/api/User/Register', novaRegistracija);
  }​​
}
