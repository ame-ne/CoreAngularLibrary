var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let OrdersService = class OrdersService {
    constructor(http) {
        this.http = http;
        this.url = 'api/orders';
    }
    getList() {
        return this.http.get(`${this.url}/list`);
    }
    getUserOrders(userId) {
        return this.http.get(`${this.url}/user-orders/${userId}`);
    }
    get(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    closeOrders(ids) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/close-orders`, JSON.stringify(ids), { headers });
    }
    extendOrdersDate(ids) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/extend-orders`, JSON.stringify(ids), { headers });
    }
    addOrders(ids) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/add-orders`, JSON.stringify(ids), { headers });
    }
    placeOrders(orders) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/place-orders`, JSON.stringify(orders), { headers });
    }
    returnOrders(userId, ids) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/return-orders/${userId}`, JSON.stringify(ids), { headers });
    }
};
OrdersService = __decorate([
    Injectable({ providedIn: 'root' })
], OrdersService);
export { OrdersService };
//# sourceMappingURL=orders.service.js.map