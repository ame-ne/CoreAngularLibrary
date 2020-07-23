import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AttachmentsService } from '../../api/services/attachments.service';
import { Attachment } from '../../api/models/attachment';

export interface UploadedBlob {
  blobId: number;
  fileName: string;
}

@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  selectedFiles: FileList;
  attachments: Attachment[];
  uploadedBlobs: UploadedBlob[] = [];

  @Input()
  mode: string = 'single';

  @ViewChild('fileUploader')
  fileUploader: ElementRef;

  constructor(private attachmentsService: AttachmentsService) { }

  ngOnInit(): void {
  }

  selectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadFiles() {
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }

  async upload(idx, file) {
    await this.attachmentsService.uploadBlob(file).toPromise().then((uploadedId) => {
      this.uploadedBlobs.push({
        blobId: uploadedId,
        fileName: file.name
      });
      this.fileUploader.nativeElement.value = '';
    }).catch(() => {
      alert(`Файл "${file.name}" не загружен`);
    });
  }
}
