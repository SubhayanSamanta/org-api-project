import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Authentication, LogIn } from '../Class/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //registration api
  regApi: string = "https://wtsacademy.dedicateddevelopers.us/api/user/signup";

  //login api
  loginApi : string = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";

  constructor(private httpClient: HttpClient) { }

  //method for registration
  registration(data: any): Observable<Authentication[]> {
    return this.httpClient.post<Authentication[]>(this.regApi, data);
  }

  //method for login
  login(data:any):Observable<LogIn[]>{
    return this.httpClient.post<LogIn[]>(this.loginApi,data);
  }

}
