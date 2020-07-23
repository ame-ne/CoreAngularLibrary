import { Injectable } from '@angular/core';
import { Book } from '../../api/models/book';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    books: Book[] = [];

    constructor() { }

    addToCart(book: Book) {
        this.books.push(book);
    }

    removeFromCart(book: Book) {
        const index = this.books.indexOf(book);
        if (index > -1) {
            this.books.splice(index, 1);
        }
        return this.books;
    }

    getItems() {
        return this.books;
    }

    clearCart() {
        this.books = [];
        return this.books;
    }

    hasItems(): boolean {
        return this.books && this.books.length > 0;
    }

    alreadyInCart(book: Book): boolean {
        return book ? !!this.books.find(x => x.id === book.id) : true;
    }
}