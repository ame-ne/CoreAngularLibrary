import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BooksListComponent } from './books/books-list/books-list.component';
import { NotFoundComponent } from './exceptions/not-found/not-found.component';;
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { UserMenuComponent } from './menu/user-menu/user-menu.component';
import { UserOrdersComponent } from './orders/user-orders/user-orders.component'
import { AppRoutesModule } from './infrastructure/app-routes.module';
import { ErrorInterceptor } from './infrastructure/interceptors/error.interceptor';
import { JwtInterceptor } from './infrastructure/interceptors/jwt.interceptor';
import { RoleTitle, IsAdmin, IsStorekeeper, IsLibrarian } from './infrastructure/pipes/role.pipe';
import { OrderStatusTitle } from './infrastructure/pipes/order.pipe';
import { FormatDate } from './infrastructure/pipes/date.pipe';
import { SearchFilter } from './infrastructure/pipes/search.pipe';
import { CartComponent } from './orders/cart/cart.component';
import { BookPageComponent } from './books/book-page/book-page.component';
import { BookEditComponent } from './books/book-edit/book-edit.component'
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { GenresListComponent } from './genres/genres-list/genres-list.component';
import { GenreEditComponent } from './genres/genre-edit/genre-edit.component';
import { TagboxComponent } from './items/tagbox/tagbox.component';
import { CarouselComponent } from './items/carousel/carousel.component';
import { FileUploaderComponent } from './items/file-uploader/file-uploader.component';
import { SafeImagePipe } from './infrastructure/pipes/image.pipe';
import { ForbidComponent } from './exceptions/forbid/forbid.component';
import { ModalComponent } from './items/modal/modal.component';
import { PaginationComponent } from './items/pagination/pagination.component'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutesModule
    ],
    declarations: [
        AppComponent,
        BooksListComponent,
        NotFoundComponent,
        LoginComponent,
        RegistrationComponent,
        UserMenuComponent,
        UserOrdersComponent,
        RoleTitle,
        IsAdmin,
        IsStorekeeper,
        IsLibrarian,
        OrderStatusTitle,
        FormatDate,
        SearchFilter,
        SafeImagePipe,
        CartComponent,
        BookPageComponent,
        BookEditComponent,
        OrdersListComponent,
        AuthorsListComponent,
        AuthorEditComponent,
        GenresListComponent,
        GenreEditComponent,
        TagboxComponent,
        CarouselComponent,
        FileUploaderComponent,
        ForbidComponent,
        ModalComponent,
        PaginationComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }