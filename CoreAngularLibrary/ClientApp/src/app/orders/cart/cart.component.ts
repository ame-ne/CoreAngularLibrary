import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/infrastructure/services/cart.service';
import { Book, Order } from 'src/app/api/models';
import { OrdersService, AuthenticationService } from 'src/app/api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  books: Book[];

  constructor(private cartService: CartService,
    private ordersService: OrdersService,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.books = this.cartService.getItems();
  }

  removeFromCart(book: Book) {
    this.books = this.cartService.removeFromCart(book);
  }

  placeOrder() {
    const userId = this.authService.currentUserValue.id;
    const orders: Order[] = [];
    this.books.map((book) => {
      orders.push({
        bookId: book.id,
        userId: userId
      })
    });
    this.ordersService.placeOrders(orders).subscribe(() => {
      this.books = this.cartService.clearCart();
      this.router.navigateByUrl('/my/orders')
    });
  }
}
