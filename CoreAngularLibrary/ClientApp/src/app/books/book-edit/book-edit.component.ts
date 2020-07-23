import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService, AuthorsService, GenresService } from 'src/app/api/services';
import { Book, Author, Genre, BookGenre, BookAuthor, Attachment, AttachmentType } from 'src/app/api/models';
import { TagboxComponent } from 'src/app/items/tagbox/tagbox.component';
import { FileUploaderComponent } from 'src/app/items/file-uploader/file-uploader.component';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id?: number;
  isNew: boolean;
  book: Book = {};
  authors: Author[] = [];
  genres: Genre[] = [];

  @ViewChild('authorsTagBox') authorsTagBox: TagboxComponent;
  @ViewChild('genresTagBox') genresTagBox: TagboxComponent;
  @ViewChild('coverFileInput') coverFileInput: FileUploaderComponent;
  @ViewChild('pagesFileInput') pagesFileInput: FileUploaderComponent;

  constructor(private booksService: BooksService,
    private authorsService: AuthorsService,
    private genresService: GenresService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
    this.isNew = !this.id;
  }

  async ngOnInit() {
    this.book = !this.isNew
      ? await this.booksService.getBook(this.id).toPromise()
      : { count: 0, attachments: [] };
    this.authors = await this.authorsService.getAuthors().toPromise();
    this.genres = await this.genresService.getGenres().toPromise();
  }

  removeAttachment(key) {
    this.book.attachments = this.book.attachments.filter(x => x.id != key);
  }

  async save() {
    let action: Promise<any>;
    const selectedAuthors = <Author[]>this.authorsTagBox.getSelectedItems();
    const selectedGenres = <Genre[]>this.genresTagBox.getSelectedItems();
    const book: Book = {
      id: !this.isNew ? this.book.id : 0,
      title: this.book.title,
      count: this.book.count,
      bookAuthors: selectedAuthors.map(x => <BookAuthor>{ authorId: x.id, bookId: this.book.id }),
      bookGenres: selectedGenres.map(x => <BookGenre>{ genreId: x.id, bookId: this.book.id }),
      attachments: this.book.attachments
    };

    if (this.coverFileInput.uploadedBlobs && this.coverFileInput.uploadedBlobs.length > 0) {
      book.attachments.map(x => x.isMain = false);
    }

    const attachments = this.coverFileInput.uploadedBlobs.map(x => <Attachment>{
      name: x.fileName,
      type: AttachmentType.BookAttachment,
      isMain: true,
      isPreview: false,
      blobId: x.blobId
    });
    attachments.push(...this.pagesFileInput.uploadedBlobs.map(x => <Attachment>{
      name: x.fileName,
      type: AttachmentType.BookAttachment,
      isMain: false,
      isPreview: false,
      blobId: x.blobId
    }));

    book.attachments.push(...attachments);

    if (this.isNew) {
      action = this.booksService.createBook(book).toPromise();
    } else {
      action = this.booksService.updateBook(book).toPromise();
    }
    await action.then((data) => {
      const id = this.isNew && data ? data : this.id;
      this.router.navigateByUrl(`/book/${id}`);
    });
  }

}
