var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pagesArray = [];
        this.currentPage = 1;
        this.pageSize = 10;
        this.goToPage = new EventEmitter();
    }
    set itemsCount(items) {
        if (items) {
            const totalPages = Math.ceil(items / this.pageSize);
            this.pagesArray = new Array(totalPages).fill(1);
        }
        if (items === 0) {
            this.pagesArray = [1];
        }
    }
    ngOnInit() { }
    setPage(pageNumber) {
        if (pageNumber === this.currentPage) {
            return;
        }
        this.currentPage = pageNumber;
        this.goToPage.emit(pageNumber);
    }
};
__decorate([
    Input()
], PaginationComponent.prototype, "pageSize", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "itemsCount", null);
__decorate([
    Output()
], PaginationComponent.prototype, "goToPage", void 0);
PaginationComponent = __decorate([
    Component({
        selector: 'pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.css']
    })
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map