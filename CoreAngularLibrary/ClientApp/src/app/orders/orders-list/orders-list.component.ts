import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/api/services';
import { Order, OrderStatus } from 'src/app/api/models';
import { ActivatedRoute, Params } from '@angular/router';

export enum OrderAction {
  None = 1,
  CreateOrder = 2,
  CloseOrder = 3,
  ExtendOrder = 4
}

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  mode: string;
  action: OrderAction = OrderAction.None;
  actionName: string = '';

  constructor(private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((routeParams: Params) => {
      this.mode = routeParams['mode'];
      if (this.mode === 'give') {
        this.actionName = 'Выдать';
        this.action = OrderAction.CreateOrder;
      } else if (this.mode === 'take') {
        this.actionName = 'Принять';
        this.action = OrderAction.CloseOrder;
      } else if (this.mode === 'active') {
        this.actionName = 'Продлить';
        this.action = OrderAction.ExtendOrder;
      }
      this.getOrders();
    });
  }

  getOrders() {
    this.ordersService.getList().subscribe((orders) => {
      switch (this.action) {
        case OrderAction.CloseOrder: this.orders = orders.filter(x => x.status && x.status === OrderStatus.Returned); break;
        case OrderAction.CreateOrder: this.orders = orders.filter(x => x.status && x.status === OrderStatus.Waiting); break;
        case OrderAction.ExtendOrder: this.orders = orders.filter(x => x.status && x.status === OrderStatus.Accepted); break;
        case OrderAction.None:
        default:
          this.orders = orders; break;
      }
    });
  }

  async doAction(order: Order) {
    let action: Promise<any>;
    if (this.action === OrderAction.CreateOrder) {
      action = this.ordersService.addOrders([order.id]).toPromise();
    } else if (this.action === OrderAction.CloseOrder) {
      action = this.ordersService.closeOrders([order.id]).toPromise();
    } else if (this.action === OrderAction.ExtendOrder) {
      action = this.ordersService.extendOrdersDate([order.id]).toPromise();
    }
    if (this.action !== OrderAction.None) {
      action.then(() => {
        this.getOrders();
      });
    }
  }
}