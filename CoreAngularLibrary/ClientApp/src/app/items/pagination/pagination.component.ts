import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pagesArray: number[] = [];
  currentPage: number = 1;

  @Input()
  pageSize: number = 10;

  @Input() set itemsCount(items: number) {
    if (items) {
      const totalPages = Math.ceil(items / this.pageSize);
      this.pagesArray = new Array(totalPages).fill(1);
    }
    if (items === 0) {
      this.pagesArray = [1];
    }
  }

  @Output() 
  goToPage = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() { }

  setPage(pageNumber: number): void {
    if (pageNumber === this.currentPage) {
      return;
    }
    this.currentPage = pageNumber;
    this.goToPage.emit(pageNumber);
  }
}
