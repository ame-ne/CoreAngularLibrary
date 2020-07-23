import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
    private url = 'api/users';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`${this.url}`);
    }

    getById(id: number): Observable<User> {
        return this.http.get<User>(`${this.url}/${id}`);
    }
}