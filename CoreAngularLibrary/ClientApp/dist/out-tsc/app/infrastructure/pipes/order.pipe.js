var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
import { OrderStatus } from '../../api/models';
let OrderStatusTitle = class OrderStatusTitle {
    constructor() { }
    transform(item) {
        if (item === OrderStatus.Waiting) {
            return 'Ожидает подтверждения';
        }
        if (item === OrderStatus.Accepted) {
            return 'Одобрен';
        }
        if (item === OrderStatus.Returned) {
            return 'Возврат';
        }
        return '';
    }
};
OrderStatusTitle = __decorate([
    Pipe({ name: 'orderStatusTitle' })
], OrderStatusTitle);
export { OrderStatusTitle };
//# sourceMappingURL=order.pipe.js.map