var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ModalComponent = class ModalComponent {
    constructor(modalService, elRef) {
        this.modalService = modalService;
        this.elRef = elRef;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.element = elRef.nativeElement;
    }
    ngOnInit() {
        let modal = this;
        if (!this.id) {
            return;
        }
        document.body.appendChild(this.element);
        this.element.addEventListener('click', function (e) {
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
};
__decorate([
    Input()
], ModalComponent.prototype, "id", void 0);
__decorate([
    Output()
], ModalComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], ModalComponent.prototype, "onClose", void 0);
ModalComponent = __decorate([
    Component({
        selector: 'modal',
        templateUrl: './modal.component.html',
        styleUrls: ['./modal.component.css']
    })
], ModalComponent);
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map