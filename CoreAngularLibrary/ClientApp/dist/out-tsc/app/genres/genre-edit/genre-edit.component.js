var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component } from '@angular/core';
let GenreEditComponent = class GenreEditComponent {
    constructor(genresService, router, activatedRoute) {
        this.genresService = genresService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.genre = {};
        this.id = activatedRoute.snapshot.params['id'];
        this.isNew = !this.id;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.genre = !this.isNew
                ? yield this.genresService.getGenre(this.id).toPromise()
                : {};
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let action;
            if (this.isNew) {
                action = this.genresService.createGenre(this.genre).toPromise();
            }
            else {
                action = this.genresService.updateGenre(this.genre).toPromise();
            }
            yield action.then(() => {
                this.router.navigateByUrl('/genres');
            });
        });
    }
};
GenreEditComponent = __decorate([
    Component({
        selector: 'genre-edit',
        templateUrl: './genre-edit.component.html',
        styleUrls: ['./genre-edit.component.css']
    })
], GenreEditComponent);
export { GenreEditComponent };
//# sourceMappingURL=genre-edit.component.js.map