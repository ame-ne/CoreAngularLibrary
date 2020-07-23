var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
let AuthorsService = class AuthorsService {
    constructor(http) {
        this.http = http;
        this.url = 'api/authors';
    }
    getAuthors() {
        return this.http.get(this.url);
    }
    getAuthor(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    createAuthor(author) {
        return this.http.post(this.url, author);
    }
    updateAuthor(author) {
        return this.http.put(this.url, author);
    }
    deleteAuthor(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
};
AuthorsService = __decorate([
    Injectable({ providedIn: 'root' })
], AuthorsService);
export { AuthorsService };
//# sourceMappingURL=authors.service.js.map