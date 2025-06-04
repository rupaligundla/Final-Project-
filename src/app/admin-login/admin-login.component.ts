import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/api/v1/login', loginData).subscribe(
      res => {
        alert("Login Successful");
         localStorage.setItem('isLoggedIn', 'true');  // store login status
        this.router.navigate(['/home']); // redirect to home after login
      },
      err => {
        alert("Login Failed");
      }
    );
  }
}
