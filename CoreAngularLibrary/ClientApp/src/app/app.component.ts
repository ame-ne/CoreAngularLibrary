import { Component } from '@angular/core';
import { UserResponse } from './api/models';
import { AuthenticationService } from './api/services';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    public get currentUser(): UserResponse {
        return this.authService && this.authService.currentUserValue ? this.authService.currentUserValue : null;
    }

    constructor(private authService: AuthenticationService) { }
}