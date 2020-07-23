import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from '../../api/models';

@Pipe({ name: 'orderStatusTitle' })
export class OrderStatusTitle implements PipeTransform {
    constructor() { }

    transform(item: OrderStatus) {
        if (item === OrderStatus.Waiting) {
            return 'Ожидает подтверждения';
        }
        if (item === OrderStatus.Accepted) {
            return 'Одобрен';
        }
        if (item === OrderStatus.Returned) {
            return 'Возврат'
        }
        return ''
    }
}