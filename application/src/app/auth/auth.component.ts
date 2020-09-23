import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuthenticated;
  }

  onSignIn(): void {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuthenticated;
        this.router.navigate(['appareils']);
      }
    );
  }

  onSignOut(): void {
    this.authService.signOut();
    this.authStatus = this.authService.isAuthenticated;
  }
}
