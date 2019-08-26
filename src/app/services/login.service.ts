import { Injectable } from '@angular/core';

import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {LoginResponse} from "../model/login.response";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080/users/';

  login(loginPayload) : Observable<LoginResponse> {
    //const  headers = new  HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<LoginResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getUsers() : Observable<LoginResponse> {
    return this.http.get<LoginResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<LoginResponse> {
    return this.http.get<LoginResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<LoginResponse> {
    return this.http.put<LoginResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<LoginResponse> {
    return this.http.delete<LoginResponse>(this.baseUrl + id);
  }
}
