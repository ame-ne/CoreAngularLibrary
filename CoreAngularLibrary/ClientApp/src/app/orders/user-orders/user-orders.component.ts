import { Component, OnInit } from '@angular/core';
import { OrdersService, AuthenticationService } from 'src/app/api/services';
import { Order } from 'src/app/api/models';

@Component({
  selector: 'user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private ordersService: OrdersService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    const userId = this.authenticationService.currentUserValue.id;
    this.ordersService.getUserOrders(userId).subscribe((orders) => {
      this.orders = orders;
    });
  }

  returnOrder(order: Order) {
    const userId = this.authenticationService.currentUserValue.id;
    this.ordersService.returnOrders(userId, [order.id]).subscribe(() => {
      this.getOrders();
    });
  }
}
