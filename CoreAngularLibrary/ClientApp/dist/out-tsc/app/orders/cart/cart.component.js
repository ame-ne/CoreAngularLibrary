var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let CartComponent = class CartComponent {
    constructor(cartService, ordersService, authService, router) {
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.books = this.cartService.getItems();
    }
    removeFromCart(book) {
        this.books = this.cartService.removeFromCart(book);
    }
    placeOrder() {
        const userId = this.authService.currentUserValue.id;
        const orders = [];
        this.books.map((book) => {
            orders.push({
                bookId: book.id,
                userId: userId
            });
        });
        this.ordersService.placeOrders(orders).subscribe(() => {
            this.books = this.cartService.clearCart();
            this.router.navigateByUrl('/my/orders');
        });
    }
};
CartComponent = __decorate([
    Component({
        selector: 'cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.css']
    })
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map