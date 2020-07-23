import { Component, OnInit, ElementRef, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../infrastructure/services/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  private element: any;

  @Input()
  id: string;

  @Output()
  onOpen: EventEmitter<any> = new EventEmitter();

  @Output()
  onClose: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: ModalService,
    private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    let modal = this;
    if (!this.id) {
      return;
    }

    document.body.appendChild(this.element);
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'cal-modal') {
        modal.close();
      }
    });
    this.modalService.add(this);
  }

  ngOnDestroy() {
    this.modalService.remove(this.id);
    this.element.remove();
    document.body.classList.remove('cal-open');
  }

  open() {
    this.element.style.display = 'block';
    document.body.classList.add('cal-open');
    if (this.onOpen) {
      this.onOpen.emit();
    }
  }

  close() {
    this.element.style.display = 'none';
    document.body.classList.remove('cal-open');
    if (this.onClose) {
      this.onClose.emit();
    }
  }
}
