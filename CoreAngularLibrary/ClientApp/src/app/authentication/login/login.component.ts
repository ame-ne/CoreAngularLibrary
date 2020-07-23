import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../api/services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.authenticationService.authenticate({ login: this.login, password: this.password }).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }
}