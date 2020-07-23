var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let GenresListComponent = class GenresListComponent {
    constructor(genresService) {
        this.genresService = genresService;
        this.genres = [];
    }
    ngOnInit() {
        this.loadGenres();
    }
    loadGenres() {
        this.genresService.getGenres().subscribe((genres) => {
            this.genres = genres;
        });
    }
    delete(genre) {
        if (confirm('Удалить жанр?')) {
            this.genresService.deleteGenre(genre.id).subscribe(() => {
                this.loadGenres();
            });
        }
    }
};
GenresListComponent = __decorate([
    Component({
        selector: 'genres-list',
        templateUrl: './genres-list.component.html',
        styleUrls: ['./genres-list.component.css']
    })
], GenresListComponent);
export { GenresListComponent };
//# sourceMappingURL=genres-list.component.js.map