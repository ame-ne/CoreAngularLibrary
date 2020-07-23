import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrdersService {
    private url = 'api/orders';

    constructor(private http: HttpClient) {
    }

    getList(): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.url}/list`);
    }

    getUserOrders(userId: number): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.url}/user-orders/${userId}`);
    }

    get(id: number): Observable<Order> {
        return this.http.get<Order>(`${this.url}/${id}`);
    }

    closeOrders(ids: number[]) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/close-orders`, JSON.stringify(ids), { headers });
    }

    extendOrdersDate(ids: number[]) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/extend-orders`, JSON.stringify(ids), { headers });
    }

    addOrders(ids: number[]) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/add-orders`, JSON.stringify(ids), { headers });
    }

    placeOrders(orders: Order[]) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/place-orders`, JSON.stringify(orders), { headers });
    }

    returnOrders(userId: number, ids: number[]) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/return-orders/${userId}`, JSON.stringify(ids), { headers });
    }
}