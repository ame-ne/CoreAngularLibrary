import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AttachmentsService {
    private baseUrl = 'api/attachments';

    constructor(private http: HttpClient) { }

    uploadBlob(file: File): Observable<number> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        return this.http.post<number>(`${this.baseUrl}/upload`, formData);
    }

    getBlob(id: number): Observable<Blob> {
        return this.http.get(`${this.baseUrl}/${id}`, { responseType: 'blob' });
    }

    async getImageUrl(blobId: number): Promise<string> {
        const blob = await this.getBlob(blobId).toPromise();
        return this.createImageFromBlob(blob).pipe(map(res => res as string)).toPromise();
    }

    private createImageFromBlob(image: Blob): Observable<string | ArrayBuffer> {
        const reader = new FileReader();
        const fileReaderObs: Observable<string | ArrayBuffer> = Observable.create((observer: BehaviorSubject<string | ArrayBuffer>) => {
            reader.onload = function () {
                observer.next(reader.result);
                observer.complete();
            }
        })
        if (image) {
            reader.readAsDataURL(image);
        }
        return fileReaderObs
    }
}
