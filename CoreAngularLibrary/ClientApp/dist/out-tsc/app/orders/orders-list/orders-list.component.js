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
import { OrderStatus } from 'src/app/api/models';
export var OrderAction;
(function (OrderAction) {
    OrderAction[OrderAction["None"] = 1] = "None";
    OrderAction[OrderAction["CreateOrder"] = 2] = "CreateOrder";
    OrderAction[OrderAction["CloseOrder"] = 3] = "CloseOrder";
    OrderAction[OrderAction["ExtendOrder"] = 4] = "ExtendOrder";
})(OrderAction || (OrderAction = {}));
let OrdersListComponent = class OrdersListComponent {
    constructor(ordersService, activatedRoute) {
        this.ordersService = ordersService;
        this.activatedRoute = activatedRoute;
        this.orders = [];
        this.action = OrderAction.None;
        this.actionName = '';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((routeParams) => {
            this.mode = routeParams['mode'];
            if (this.mode === 'give') {
                this.actionName = 'Выдать';
                this.action = OrderAction.CreateOrder;
            }
            else if (this.mode === 'take') {
                this.actionName = 'Принять';
                this.action = OrderAction.CloseOrder;
            }
            else if (this.mode === 'active') {
                this.actionName = 'Продлить';
                this.action = OrderAction.ExtendOrder;
            }
            this.getOrders();
        });
    }
    getOrders() {
        this.ordersService.getList().subscribe((orders) => {
            switch (this.action) {
                case OrderAction.CloseOrder:
                    this.orders = orders.filter(x => x.status && x.status === OrderStatus.Returned);
                    break;
                case OrderAction.CreateOrder:
                    this.orders = orders.filter(x => x.status && x.status === OrderStatus.Waiting);
                    break;
                case OrderAction.ExtendOrder:
                    this.orders = orders.filter(x => x.status && x.status === OrderStatus.Accepted);
                    break;
                case OrderAction.None:
                default:
                    this.orders = orders;
                    break;
            }
        });
    }
    doAction(order) {
        return __awaiter(this, void 0, void 0, function* () {
            let action;
            if (this.action === OrderAction.CreateOrder) {
                action = this.ordersService.addOrders([order.id]).toPromise();
            }
            else if (this.action === OrderAction.CloseOrder) {
                action = this.ordersService.closeOrders([order.id]).toPromise();
            }
            else if (this.action === OrderAction.ExtendOrder) {
                action = this.ordersService.extendOrdersDate([order.id]).toPromise();
            }
            if (this.action !== OrderAction.None) {
                action.then(() => {
                    this.getOrders();
                });
            }
        });
    }
};
OrdersListComponent = __decorate([
    Component({
        selector: 'orders-list',
        templateUrl: './orders-list.component.html',
        styleUrls: ['./orders-list.component.css']
    })
], OrdersListComponent);
export { OrdersListComponent };
//# sourceMappingURL=orders-list.component.js.map