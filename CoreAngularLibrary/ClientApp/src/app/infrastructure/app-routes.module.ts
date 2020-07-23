import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from '../books/books-list/books-list.component';
import { NotFoundComponent } from '../exceptions/not-found/not-found.component';;
import { LoginComponent } from '../authentication/login/login.component';
import { RegistrationComponent } from '../authentication/registration/registration.component'
import { UserOrdersComponent } from '../orders/user-orders/user-orders.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard'
import { CartComponent } from '../orders/cart/cart.component';
import { BookEditComponent } from '../books/book-edit/book-edit.component';
import { BookPageComponent } from '../books/book-page/book-page.component';
import { Role } from '../api/models';
import { OrdersListComponent } from '../orders/orders-list/orders-list.component';
import { AuthorsListComponent } from '../authors/authors-list/authors-list.component';
import { AuthorEditComponent } from '../authors/author-edit/author-edit.component';
import { GenresListComponent } from '../genres/genres-list/genres-list.component';
import { GenreEditComponent } from '../genres/genre-edit/genre-edit.component';
import { ForbidComponent } from '../exceptions/forbid/forbid.component';

const appRoutes: Routes = [
    { path: '', component: BooksListComponent },
    { path: 'book/create', component: BookEditComponent, pathMatch: 'full', canActivate: [AuthGuard], data: { roles: [Role.Administrator, Role.Storekeeper] } },
    { path: 'book/:id/edit', component: BookEditComponent, canActivate: [AuthGuard], data: { roles: [Role.Administrator, Role.Storekeeper] } },
    { path: 'book/:id', component: BookPageComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/registration', component: RegistrationComponent },
    { path: 'my/orders', component: UserOrdersComponent, canActivate: [AuthGuard] },
    { path: 'my/cart', component: CartComponent, canActivate: [AuthGuard] },
    { path: 'orders', redirectTo: 'orders/active', pathMatch: 'full' },
    { path: 'orders/:mode', component: OrdersListComponent, canActivate: [AuthGuard], data: { roles: [Role.Administrator, Role.Librarian] } },
    { path: 'authors', component: AuthorsListComponent, canActivate: [AuthGuard], data: { roles: [Role.Administrator, Role.Storekeeper] } },
    { path: 'author/create', component: AuthorEditComponent, pathMatch: 'full', canActivate: [AuthGuard], data: { roles: [Role.Administrator, Role.Storekeeper] } },
    { path: 'author/:id/edit', component: AuthorEditComponent, canActivate: [AuthGuard], data: { roles: [Role.Administrator, Role.Storekeeper] } },
    { path: 'genres', component: GenresListComponent, canActivate: [AuthGuard], data: { roles: [Role.Administrator, Role.Storekeeper] } },
    { path: 'genre/create', component: GenreEditComponent, pathMatch: 'full', canActivate: [AuthGuard], data: { roles: [Role.Administrator, Role.Storekeeper] } },
    { path: 'genre/:id/edit', component: GenreEditComponent, canActivate: [AuthGuard], data: { roles: [Role.Administrator, Role.Storekeeper] } },
    { path: 'error/404', component: NotFoundComponent },
    { path: 'error/403', component: ForbidComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutesModule { }