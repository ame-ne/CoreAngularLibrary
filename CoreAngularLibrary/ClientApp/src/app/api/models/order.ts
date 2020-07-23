import { Book, UserResponse } from '../models';
import { OrderStatus } from './order-status';

export interface Order {
    id?: number;
    bookId?: number;
    book?: Book;
    userId?: number;
    user?: UserResponse;
    dateFrom?: Date;
    dateTo?: Date;
    status?: OrderStatus;
}