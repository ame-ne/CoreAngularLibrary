import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({ providedIn: 'root' })
export class AuthorsService {
    private url = 'api/authors';

    constructor(private http: HttpClient) {
    }

    getAuthors(): Observable<Author[]> {
        return this.http.get<Author[]>(this.url);
    }

    getAuthor(id: number): Observable<Author> {
        return this.http.get<Author>(`${this.url}/${id}`);
    }

    createAuthor(author: Author) {
        return this.http.post(this.url, author);
    }

    updateAuthor(author: Author) {
        return this.http.put(this.url, author);
    }

    deleteAuthor(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}