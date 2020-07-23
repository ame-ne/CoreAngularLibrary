import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../api/services/books.service';
import { Book } from '../../api/models/book';
import { AuthenticationService, AttachmentsService } from 'src/app/api/services';
import { CartService } from '../../infrastructure/services/cart.service';
import { UserResponse, DisplayBook } from 'src/app/api/models';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  data: DisplayBook[];
  displayBooks: DisplayBook[];
  searchText: string = '';
  booksCount: number;
  pageSize: number = 5;
  pagination: any;

  public get currentUser(): UserResponse {
    return this.authService && this.authService.currentUserValue ? this.authService.currentUserValue : null;
  }

  constructor(private booksService: BooksService,
    private authService: AuthenticationService,
    private attachService: AttachmentsService,
    public cartService: CartService) {
  }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.booksService.getBooks().subscribe((data: Book[]) => {
      this.data = data.map((book) => {
        let bookItem = <DisplayBook>{
          id: book.id,
          title: book.title,
          count: book.count,
          authors: book.bookAuthors.map(x => x.author && x.author.fio).join(', '),
          genres: book.bookGenres.map(x => x.genre && x.genre.title).join(', '),
        }
        const coverAttach = book.attachments.find(x => x.isMain);
        if (coverAttach && coverAttach.blobId) {
          this.attachService.getImageUrl(coverAttach.blobId).then((url) => {
            bookItem.coverUrl = url;
          });
        }
        return bookItem;
      });
      this.booksCount = this.data.length;
      this.goToPage(1);
    });
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
    alert('Добавлено в корзину!');
  }

  delete(book: Book) {
    if (confirm('Удалить книгу?')) {
      this.booksService.deleteBook(book.id).subscribe(() => {
        this.loadBooks();
      });
    }
  }

  goToPage(page: number): void {
    this.displayBooks = this.applySearchFilter();
    this.booksCount = this.displayBooks.length;
    this.displayBooks = this.displayBooks
      .slice((page - 1) * this.pageSize, (page - 1) * this.pageSize + this.pageSize);
  }

  applySearchFilter(): Book[] {
    if (!this.searchText) {
      return this.data;
    }
    const searchStr = this.searchText.toLowerCase();
    return this.data.filter(item => item.title.toLowerCase().includes(searchStr)
      || item.authors.toLowerCase().includes(searchStr)
      || item.genres.toLowerCase().includes(searchStr));
  }
}
