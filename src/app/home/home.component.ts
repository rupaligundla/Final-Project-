import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
	imports: [NgbCarouselModule]
})
export class HomeComponent {
  
  constructor(
   
    private router: Router) { 
      
    }
  goToEmployeeList(){
    this.router.navigate(['/show-all-employees']);
  }
}
