import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/Genre';

@Injectable({ providedIn: 'root' })
export class GenresService {
    private url = 'api/genres';

    constructor(private http: HttpClient) {
    }

    getGenres(): Observable<Genre[]> {
        return this.http.get<Genre[]>(this.url);
    }

    getGenre(id: number): Observable<Genre> {
        return this.http.get<Genre>(`${this.url}/${id}`);
    }

    createGenre(genre: Genre) {
        return this.http.post(this.url, genre);
    }

    updateGenre(genre: Genre) {
        return this.http.put(this.url, genre);
    }

    deleteGenre(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}