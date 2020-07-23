var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let ModalService = class ModalService {
    constructor() {
        this.modals = [];
        this.modalState = new Subject();
        this.modalStateObservable$ = this.modalState.asObservable();
    }
    add(modal) {
        this.modals.push(modal);
    }
    remove(id) {
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        let modal = this.modals.filter(x => x.id === id)[0];
        this.modalState.next('open');
        modal.open();
    }
    close(id) {
        let modal = this.modals.filter(x => x.id === id)[0];
        this.modalState.next('close');
        modal.close();
    }
};
ModalService = __decorate([
    Injectable({ providedIn: 'root' })
], ModalService);
export { ModalService };
//# sourceMappingURL=modal.service.js.map