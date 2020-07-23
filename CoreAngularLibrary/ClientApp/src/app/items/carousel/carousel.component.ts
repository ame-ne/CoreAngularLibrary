import { Component, OnInit, Input, HostListener, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AttachmentsService } from 'src/app/api/services';
import { ModalService } from 'src/app/infrastructure/services/modal.service';

export interface ImageData {
  blobId?: number;
  url?: string;
  isLoaded?: boolean;
}

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  private currentIndex: number = 0;
  private modalStateSubscription: any;
  imageData: ImageData[] = [];
  currentImage: string;

  @Input() set dataSource(blobIds: number[]) {
    if (blobIds) {
      this.imageData = blobIds.map(x => <ImageData>{
        blobId: x,
        url: '',
        isLoaded: false
      });
      this.currentIndex = 0;
      this.loadImage();
    }
  }

  constructor(private attachService: AttachmentsService,
    private modalService: ModalService) { }

  ngOnInit(): void {
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

  @HostListener('document:keyup.arrowright', ['$event.target'])
  next() {
    this.currentIndex++;
    this.loadImage();
  }

  @HostListener('document:keyup.arrowleft', ['$event.target'])
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

  async loadImage() {
    this.checkIndex();
    const currentImageData = this.imageData[this.currentIndex];
    if (currentImageData.isLoaded && currentImageData.url) {
      this.currentImage = currentImageData.url;
    }
    else {
      const blobId = currentImageData.blobId;
      const url = await this.attachService.getImageUrl(blobId);
      if (url) {
        currentImageData.url = url;
        currentImageData.isLoaded = true;
        this.currentImage = currentImageData.url;
      }
    }
  }
}
