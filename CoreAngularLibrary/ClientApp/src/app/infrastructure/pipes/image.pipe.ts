import { Pipe } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safeImage' })
export class SafeImagePipe {
    constructor(protected _sanitizer: DomSanitizer) { }

    public transform(value: string): SafeResourceUrl {
        return this._sanitizer.bypassSecurityTrustResourceUrl(value);
    }
}