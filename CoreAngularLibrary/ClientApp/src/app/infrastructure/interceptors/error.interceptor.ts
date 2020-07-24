import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../../api/services';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
        private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(catchError(err => this.handleError(err)));
    }

    private handleError(response: HttpErrorResponse): Observable<any> {
        if ([401, 403].indexOf(response.status) !== -1) {
            if (response.status === 401) {
                this.authenticationService.logout();
                this.router.navigateByUrl('/auth/login');
                return throwError(response);
            } else {
                this.router.navigateByUrl('/error/403');
                return throwError(response);
            }
        }
        if (response.status === 404) {
            this.router.navigateByUrl('/error/404');
            return throwError(response);
        }
        let message: any = response.error || '';

        if (typeof message === 'string') {
            try { message = JSON.parse(message); } catch (error) { }
        }

        if (typeof message === 'object') {
            if (message.innerException !== undefined) {
                message = message.innerException.exceptionMessage;
            } else {
                if (message.exceptionMessage !== undefined) {
                    message = message.exceptionMessage;
                } else {
                    if (message.errorText !== undefined) {
                        message = message.errorText;
                    }
                }
            }
        }

        if (message) {
            console.log(message);
        }
        if (typeof message === 'string') {
            alert(message);
        }

        return throwError(response);
    }
}