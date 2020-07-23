var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let BooksListComponent = class BooksListComponent {
    constructor(booksService, authService, attachService, cartService) {
        this.booksService = booksService;
        this.authService = authService;
        this.attachService = attachService;
        this.cartService = cartService;
        this.searchText = '';
        this.pageSize = 5;
    }
    get currentUser() {
        return this.authService && this.authService.currentUserValue ? this.authService.currentUserValue : null;
    }
    ngOnInit() {
        this.loadBooks();
    }
    loadBooks() {
        this.booksService.getBooks().subscribe((data) => {
            this.data = data.map((book) => {
                let bookItem = {
                    id: book.id,
                    title: book.title,
                    count: book.count,
                    authors: book.bookAuthors.map(x => x.author && x.author.fio).join(', '),
                    genres: book.bookGenres.map(x => x.genre && x.genre.title).join(', '),
                };
                const coverAttach = book.attachments.find(x => x.isMain);
                if (coverAttach && coverAttach.blobId) {
                    this.attachService.getImageUrl(coverAttach.blobId).then((url) => {
                        bookItem.coverUrl = url;
                    });
                }
                return bookItem;
            });
            this.booksCount = this.data.length;
            this.goToPage(1);
        });
    }
    addToCart(book) {
        this.cartService.addToCart(book);
        alert('Добавлено в корзину!');
    }
    delete(book) {
        if (confirm('Удалить книгу?')) {
            this.booksService.deleteBook(book.id).subscribe(() => {
                this.loadBooks();
            });
        }
    }
    goToPage(page) {
        this.displayBooks = this.applySearchFilter();
        this.booksCount = this.displayBooks.length;
        this.displayBooks = this.displayBooks
            .slice((page - 1) * this.pageSize, (page - 1) * this.pageSize + this.pageSize);
    }
    applySearchFilter() {
        if (!this.searchText) {
            return this.data;
        }
        const searchStr = this.searchText.toLowerCase();
        return this.data.filter(item => item.title.toLowerCase().includes(searchStr)
            || item.authors.toLowerCase().includes(searchStr)
            || item.genres.toLowerCase().includes(searchStr));
    }
};
BooksListComponent = __decorate([
    Component({
        selector: 'books-list',
        templateUrl: './books-list.component.html',
        styleUrls: ['./books-list.component.css']
    })
], BooksListComponent);
export { BooksListComponent };
//# sourceMappingURL=books-list.component.js.map