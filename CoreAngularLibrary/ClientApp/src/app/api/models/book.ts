import { BookAuthor } from './book-author';
import { BookGenre } from './book-genre';
import { Attachment } from './attachment';

export interface Book {
    id?: number;
    title?: string;
    count?: number;
    bookAuthors?: BookAuthor[];
    bookGenres?: BookGenre[];
    attachments?: Attachment[];
}