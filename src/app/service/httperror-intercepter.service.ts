/*
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AlertifyService } from './alertify.service';

@Injectable({
    providedIn:'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor
{
    constructor(private alertify:AlertifyService){}

 intercept(request:HttpRequest<any>,next:HttpHandler)
    {
        console.log("HTTP Request Started: ");
        return next.handle(request).pipe(
            catchError((error:HttpErrorResponse)=>{
                console.log(error);
                this.alertify.error(error.error);
                return throwError(error.error);
            })
        );
    }

}
*/