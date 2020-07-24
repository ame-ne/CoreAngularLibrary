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
let BookPageComponent = class BookPageComponent {
    constructor(booksService, authService, cartService, activatedRoute, attachService, modalService) {
        this.booksService = booksService;
        this.authService = authService;
        this.cartService = cartService;
        this.activatedRoute = activatedRoute;
        this.attachService = attachService;
        this.modalService = modalService;
        this.book = {};
        this.id = activatedRoute.snapshot.params['id'];
    }
    get currentUser() {
        return this.authService && this.authService.currentUserValue ? this.authService.currentUserValue : null;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const bookResult = yield this.booksService.getBook(this.id).toPromise();
            this.book = {
                id: bookResult.id,
                title: bookResult.title,
                count: bookResult.count,
                authors: bookResult.bookAuthors.map(x => x.author && x.author.fio).join(', '),
                genres: bookResult.bookGenres.map(x => x.genre && x.genre.title).join(', ')
            };
            bookResult.attachments.sort((a, b) => { if (a.isMain)
                return -1; });
            this.book.pageExampleBlobIds = bookResult.attachments.map(x => x.blobId);
            const coverAttach = bookResult.attachments.find(x => x.isMain);
            if (coverAttach && coverAttach.blobId) {
                this.attachService.getImageUrl(coverAttach.blobId).then((url) => {
                    this.book.coverUrl = url;
                });
            }
        });
    }
    addToCart(book) {
        this.cartService.addToCart(book);
    }
    openModal(id) {
        this.modalService.open(id);
    }
};
BookPageComponent = __decorate([
    Component({
        selector: 'book-page',
        templateUrl: './book-page.component.html',
        styleUrls: ['./book-page.component.css']
    })
], BookPageComponent);
export { BookPageComponent };
//# sourceMappingURL=book-page.component.js.map