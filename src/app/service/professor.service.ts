import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  public baseURL:string ="http://localhost:8080/professor/"
  constructor(private http:HttpClient,private logger:NGXLogger) { }
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  
 
  //Professor service to API

  viewEnrolledStudents(professorId): Observable<any> {
    return this.http.get(`${this.baseURL}viewenrolledstudents?professorId=${professorId}`, { 'headers': this.headers });
  }

  viewCourses(professorId):Observable<any>{
    return this.http.get(`${this.baseURL}getcourses/${professorId}`,{'headers':this.headers})
  }

  addGrade(studentId,courseCode,grade):Observable<any>{
    return this.http.post(`${this.baseURL}addgrade?studentId=${studentId}&courseCode=${courseCode}&grade=${grade}`,{'headers':this.headers}).pipe(catchError(this.errorHandler));
  }


  errorHandler(error:HttpErrorResponse)
  {
    return throwError(error.message ||"Server Error");
  }

}