var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Input, HostListener } from '@angular/core';
let CarouselComponent = class CarouselComponent {
    constructor(attachService, modalService) {
        this.attachService = attachService;
        this.modalService = modalService;
        this.currentIndex = 0;
        this.imageData = [];
    }
    set dataSource(blobIds) {
        if (blobIds && blobIds.length > 0) {
            this.imageData = blobIds.map(x => ({
                blobId: x,
                url: '',
                isLoaded: false
            }));
            this.currentIndex = 0;
            this.loadImage();
        }
    }
    ngOnInit() {
        this.modalStateSubscription = this.modalService.modalStateObservable$.subscribe((state) => {
            if (state === 'open') {
                this.currentIndex = 0;
                this.loadImage();
            }
        });
    }
    ngOnDestroy() {
        this.modalStateSubscription.unsubscribe();
    }
    next() {
        this.currentIndex++;
        this.loadImage();
    }
    prev() {
        this.currentIndex--;
        this.loadImage();
    }
    checkIndex() {
        if (this.currentIndex < 0) {
            this.currentIndex = this.imageData.length - 1;
        }
        if (this.currentIndex === this.imageData.length) {
            this.currentIndex = 0;
        }
    }
    loadImage() {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentImage = '';
            this.checkIndex();
            const currentImageData = this.imageData[this.currentIndex];
            if (currentImageData.isLoaded && currentImageData.url) {
                this.currentImage = currentImageData.url;
            }
            else {
                const blobId = currentImageData.blobId;
                const url = yield this.attachService.getImageUrl(blobId);
                if (url) {
                    currentImageData.url = url;
                    currentImageData.isLoaded = true;
                    this.currentImage = currentImageData.url;
                }
            }
        });
    }
};
__decorate([
    Input()
], CarouselComponent.prototype, "dataSource", null);
__decorate([
    HostListener('document:keyup.arrowright', ['$event.target'])
], CarouselComponent.prototype, "next", null);
__decorate([
    HostListener('document:keyup.arrowleft', ['$event.target'])
], CarouselComponent.prototype, "prev", null);
CarouselComponent = __decorate([
    Component({
        selector: 'carousel',
        templateUrl: './carousel.component.html',
        styleUrls: ['./carousel.component.css']
    })
], CarouselComponent);
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map