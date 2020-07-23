import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../api/services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private authenticationService: AuthenticationService) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const roles = route.data.roles ? route.data.roles : [];
        const result = await this.authenticationService.checkAccess(roles).toPromise();
        if (!result) {
            this.router.navigateByUrl('/auth/login');
            return false;
        }
        return true;
    }
}