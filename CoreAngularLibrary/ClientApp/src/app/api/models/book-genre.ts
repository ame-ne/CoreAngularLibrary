import { Book } from './book';
import { Genre } from './genre';

export interface BookGenre {
    bookId?: number;
    genreId?: number;
    book?: Book;
    genre?: Genre;
}