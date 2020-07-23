import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/api/services';
import { UserResponse } from 'src/app/api/models';

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  public get currentUser(): UserResponse {
    return this.authService && this.authService.currentUserValue ? this.authService.currentUserValue : null;
  }

  constructor(private authService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
