var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(catchError(err => this.handleError(err)));
    }
    handleError(response) {
        if ([401, 403].indexOf(response.status) !== -1) {
            if (response.status === 401) {
                this.authenticationService.logout();
                this.router.navigateByUrl('/auth/login');
            }
            this.router.navigateByUrl('/error/403');
            return;
        }
        if (response.status === 404) {
            this.router.navigateByUrl('/error/404');
            return;
        }
        let message = response.error || '';
        if (typeof message === 'string') {
            try {
                message = JSON.parse(message);
            }
            catch (error) { }
        }
        if (typeof message === 'object') {
            if (message.innerException !== undefined) {
                message = message.innerException.exceptionMessage;
            }
            else {
                if (message.exceptionMessage !== undefined) {
                    message = message.exceptionMessage;
                }
                else {
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
};
ErrorInterceptor = __decorate([
    Injectable()
], ErrorInterceptor);
export { ErrorInterceptor };
//# sourceMappingURL=error.interceptor.js.map