import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseURL:string ="http://localhost:8080/user/"
  constructor(private http:HttpClient,private logger:NGXLogger) { }
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  
  //Student Registration service call to API
  registerStudent(data): Observable<any> {
    return this.http.post( `${this.baseURL}studentRegister`, data, { 'headers': this.headers });
  }

  //User Login service to API
  userLogin(username, password): Observable<any> {
    return this.http.post(`${this.baseURL}login?userName=${username}&password=${password}`, { 'headers': this.headers });
  }
}
