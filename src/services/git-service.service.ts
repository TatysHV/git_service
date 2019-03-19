import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  public infoUser;

  constructor(private _http: HttpClient) {

   }

  getUser(username: string){
    return this._http.get(`https://api.github.com/users/${username}`);
  }

}
