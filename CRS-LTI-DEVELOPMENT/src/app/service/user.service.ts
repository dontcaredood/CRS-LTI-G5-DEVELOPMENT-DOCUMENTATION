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

  getUserDetails(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  registerStudent(data): Observable<any> {
    return this.http.post( `${this.baseURL}studentRegister`, data, { 'headers': this.headers });
  }

  userLogin(data): Observable<any> {
    //http://localhost:8080/user/login?userName=1sandy121&password=admin1
    return this.http.post(`${this.baseURL}login?userName=${data.username}&password=${data.password}`, { 'headers': this.headers });
  }
}
