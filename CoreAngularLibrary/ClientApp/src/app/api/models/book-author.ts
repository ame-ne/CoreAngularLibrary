import { Book } from './book';
import { Author } from './author';

export interface BookAuthor {
    bookId?: number;
    authorId?: number;
    book?: Book;
    author?: Author;
}