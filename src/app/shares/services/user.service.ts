import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private SERVER_URL: String = environment.SERVER_URL;
  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) {}

  userRegister(
      nom: string,
      prenom: string,
      ville: string,
      email: string,
      pwd: string,
      tel: number
  ) {
      const API_URL = this.SERVER_URL + '/signUp';
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
      });
      return this.httpClient.post(
          API_URL,
          {
              nom: nom,
              prenom: prenom,
              email: email,
              ville: ville,
              tel: tel,
              pwd: pwd
          }
          // { headers: headers }
      );
  }

  userLogin(email: string, pwd: string) {
      const API_URL = this.SERVER_URL + '/signIn';
      return this.httpClient.post(API_URL, {
          email: email,
          pwd: pwd,
      });
  }
}
