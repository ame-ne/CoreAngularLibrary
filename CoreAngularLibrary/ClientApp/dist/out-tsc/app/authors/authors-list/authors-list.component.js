var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let AuthorsListComponent = class AuthorsListComponent {
    constructor(authorsService) {
        this.authorsService = authorsService;
        this.authors = [];
    }
    ngOnInit() {
        this.loadAuthors();
    }
    loadAuthors() {
        this.authorsService.getAuthors().subscribe((authors) => {
            this.authors = authors;
        });
    }
    delete(author) {
        if (confirm('Удалить автора?')) {
            this.authorsService.deleteAuthor(author.id).subscribe(() => {
                this.loadAuthors();
            });
        }
    }
};
AuthorsListComponent = __decorate([
    Component({
        selector: 'authors-list',
        templateUrl: './authors-list.component.html',
        styleUrls: ['./authors-list.component.css']
    })
], AuthorsListComponent);
export { AuthorsListComponent };
//# sourceMappingURL=authors-list.component.js.map