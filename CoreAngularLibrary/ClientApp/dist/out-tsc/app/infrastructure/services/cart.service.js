var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
let CartService = class CartService {
    constructor() {
        this.books = [];
    }
    addToCart(book) {
        this.books.push(book);
    }
    removeFromCart(book) {
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
    hasItems() {
        return this.books && this.books.length > 0;
    }
    alreadyInCart(book) {
        return book ? !!this.books.find(x => x.id === book.id) : true;
    }
};
CartService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map