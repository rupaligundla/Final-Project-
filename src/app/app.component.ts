import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  showMenu = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const isLoginPage = event.url === '/login';

        // Show navbar only if logged in and not on login page
        this.showMenu = isLoggedIn && !isLoginPage;
      }
    });
  }

  logout() {
    localStorage.removeItem('isLoggedIn'); // clear login flag
    this.router.navigate(['/login']);
  }
}
