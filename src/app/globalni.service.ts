import {​​ HttpClient }​​ from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPodaci} from '../app/login-podaci'

@Injectable({
  providedIn: 'root'
})
export class GlobalniService {

  constructor(private http: HttpClient) { }



  public postLogin(noviLogin: LoginPodaci) {​​

      // console.log(noviLogin);
      // console.log("postLogin funkcija");

    return this.http.post<any>('http://weblibrary.logosoft.ba:5877/api/User/Authenticate', noviLogin);

  }​​

  public postRegister(novaRegistracija: LoginPodaci) {​​

    console.log(novaRegistracija)
  return this.http.post<any>('https://localhost:44397/api/User/Register', novaRegistracija);

}​​



}
