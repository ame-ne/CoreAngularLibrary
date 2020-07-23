import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponse, AuthenticateRequest, RegistrationRequest, Role } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private url = 'api/auth';
    private currentUserSubject: BehaviorSubject<UserResponse>;
    public currentUser: Observable<UserResponse>;

    public get currentUserValue(): UserResponse {
        return this.currentUserSubject.value;
    }

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UserResponse>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    authenticate(request: AuthenticateRequest): Observable<UserResponse> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.url + '/authenticate', JSON.stringify(request), { headers })
            .pipe(map((response: UserResponse) => {
                if (response && response.token) {
                    localStorage.setItem('currentUser', JSON.stringify(response));
                    this.currentUserSubject.next(response);
                }
                return response;
            }));
    }

    registration(request: RegistrationRequest): Observable<UserResponse> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.url + '/registration', JSON.stringify(request), { headers })
            .pipe(map((response: UserResponse) => {
                if (response && response.token) {
                    localStorage.setItem('currentUser', JSON.stringify(response));
                    this.currentUserSubject.next(response);
                }
                return response;
            }));
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    checkAccess(roles: Role[]): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post<boolean>(this.url + '/checkAccess', JSON.stringify(roles), { headers });
    }
}