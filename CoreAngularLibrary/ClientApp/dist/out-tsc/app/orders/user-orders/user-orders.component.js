var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let UserOrdersComponent = class UserOrdersComponent {
    constructor(ordersService, authenticationService) {
        this.ordersService = ordersService;
        this.authenticationService = authenticationService;
        this.orders = [];
    }
    ngOnInit() {
        this.getOrders();
    }
    getOrders() {
        const userId = this.authenticationService.currentUserValue.id;
        this.ordersService.getUserOrders(userId).subscribe((orders) => {
            this.orders = orders;
        });
    }
    returnOrder(order) {
        const userId = this.authenticationService.currentUserValue.id;
        this.ordersService.returnOrders(userId, [order.id]).subscribe(() => {
            this.getOrders();
        });
    }
};
UserOrdersComponent = __decorate([
    Component({
        selector: 'user-orders',
        templateUrl: './user-orders.component.html',
        styleUrls: ['./user-orders.component.css']
    })
], UserOrdersComponent);
export { UserOrdersComponent };
//# sourceMappingURL=user-orders.component.js.map