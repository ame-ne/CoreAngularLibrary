var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.url = 'api/auth';
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    authenticate(request) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.url + '/authenticate', JSON.stringify(request), { headers })
            .pipe(map((response) => {
            if (response && response.token) {
                localStorage.setItem('currentUser', JSON.stringify(response));
                this.currentUserSubject.next(response);
            }
            return response;
        }));
    }
    registration(request) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.url + '/registration', JSON.stringify(request), { headers })
            .pipe(map((response) => {
            if (response && response.token) {
                localStorage.setItem('currentUser', JSON.stringify(response));
                this.currentUserSubject.next(response);
            }
            return response;
        }));
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    checkAccess(roles) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/checkAccess', JSON.stringify(roles), { headers });
    }
};
AuthenticationService = __decorate([
    Injectable({ providedIn: 'root' })
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map