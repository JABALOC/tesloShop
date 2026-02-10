import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  templateUrl: './auth-layout.html',
})
export class AuthLayout {

  constructor() {
    this.route.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => this.onRoute());
  }

  route = inject(Router);
  title = signal('');

  onRoute() {

    const url = this.route.url;

    if (url.includes('register')) {
      this.title.set('Register');
    } else if (url.includes('login')){
      this.title.set('Sign in');
    }
  }

}
