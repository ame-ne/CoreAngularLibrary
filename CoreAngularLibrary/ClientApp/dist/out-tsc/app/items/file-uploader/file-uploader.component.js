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
import { Component, Input, ViewChild } from '@angular/core';
let FileUploaderComponent = class FileUploaderComponent {
    constructor(attachmentsService) {
        this.attachmentsService = attachmentsService;
        this.uploadedBlobs = [];
        this.mode = 'single';
    }
    ngOnInit() {
    }
    selectFiles(event) {
        this.selectedFiles = event.target.files;
    }
    uploadFiles() {
        for (let i = 0; i < this.selectedFiles.length; i++) {
            this.upload(i, this.selectedFiles[i]);
        }
    }
    upload(idx, file) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.attachmentsService.uploadBlob(file).toPromise().then((uploadedId) => {
                this.uploadedBlobs.push({
                    blobId: uploadedId,
                    fileName: file.name
                });
                this.fileUploader.nativeElement.value = '';
            }).catch(() => {
                alert(`Файл "${file.name}" не загружен`);
            });
        });
    }
};
__decorate([
    Input()
], FileUploaderComponent.prototype, "mode", void 0);
__decorate([
    ViewChild('fileUploader')
], FileUploaderComponent.prototype, "fileUploader", void 0);
FileUploaderComponent = __decorate([
    Component({
        selector: 'file-uploader',
        templateUrl: './file-uploader.component.html',
        styleUrls: ['./file-uploader.component.css']
    })
], FileUploaderComponent);
export { FileUploaderComponent };
//# sourceMappingURL=file-uploader.component.js.map