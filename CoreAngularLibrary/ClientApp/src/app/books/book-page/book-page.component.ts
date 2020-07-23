import { Component, OnInit } from '@angular/core';
import { BooksService, AuthenticationService, AttachmentsService } from 'src/app/api/services';
import { ActivatedRoute } from '@angular/router';
import { Book, DisplayBook, UserResponse } from 'src/app/api/models';
import { CartService } from 'src/app/infrastructure/services/cart.service';
import { ModalService } from 'src/app/infrastructure/services/modal.service';

@Component({
  selector: 'book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  id: number;
  book: DisplayBook = {};

  public get currentUser(): UserResponse {
    return this.authService && this.authService.currentUserValue ? this.authService.currentUserValue : null;
  }

  constructor(private booksService: BooksService,
    private authService: AuthenticationService,
    public cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private attachService: AttachmentsService,
    private modalService: ModalService) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  async ngOnInit() {
    const bookResult = await this.booksService.getBook(this.id).toPromise();
    this.book = {
      id: bookResult.id,
      title: bookResult.title,
      count: bookResult.count,
      authors: bookResult.bookAuthors.map(x => x.author && x.author.fio).join(', '),
      genres: bookResult.bookGenres.map(x => x.genre && x.genre.title).join(', ')
    };
    bookResult.attachments.sort((a, b) => { if (a.isMain) return 1; });
    this.book.pageExampleBlobIds = bookResult.attachments.map(x => x.blobId);
    const coverAttach = bookResult.attachments.find(x => x.isMain);
    if (coverAttach && coverAttach.blobId) {
      this.attachService.getImageUrl(coverAttach.blobId).then((url) => {
        this.book.coverUrl = url;
      });
    }
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
}
