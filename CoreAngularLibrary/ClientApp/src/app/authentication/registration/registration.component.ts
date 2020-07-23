import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/api/services';
import { RegistrationRequest } from 'src/app/api/models';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  request: RegistrationRequest = {};

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  registration(request) {
      this.authenticationService.registration(request).subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
