﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksService {
    private url = 'api/books';

    constructor(private http: HttpClient) {
    }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.url);
    }

    getBook(id: number): Observable<Book> {
        return this.http.get<Book>(`${this.url}/${id}`);
    }

    createBook(book: Book): Observable<number> {
        return this.http.post<number>(this.url, book);
    }

    updateBook(book: Book) {
        return this.http.put(this.url, book);
    }

    deleteBook(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}