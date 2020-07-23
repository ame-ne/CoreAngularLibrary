var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let UserMenuComponent = class UserMenuComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    get currentUser() {
        return this.authService && this.authService.currentUserValue ? this.authService.currentUserValue : null;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/');
    }
};
UserMenuComponent = __decorate([
    Component({
        selector: 'user-menu',
        templateUrl: './user-menu.component.html',
        styleUrls: ['./user-menu.component.css']
    })
], UserMenuComponent);
export { UserMenuComponent };
//# sourceMappingURL=user-menu.component.js.map