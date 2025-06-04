import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent //implements OnInit//
{
[x: string]: any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,

  ) {

  }


  submitform!: NgForm;
  private baseURL = "http://localhost:8080/api/v1/employees";
  employee: Employee = new Employee();
  
  saveEmployee() {
  console.log('Inside saveEmployee(), data to send:', this.employee);
  this.employeeService.addEmployee(this.employee).subscribe(data => {
    console.log('Employee saved successfully:', data);
    this.goToEmployeeList();
  },
  error => console.log('Error saving employee:', error));
}

  goToEmployeeList() {
    this.router.navigate(['/show-all-employees']);
  }

  ngOnInit(): void { }
  onSubmit() {
    console.log(this.employee);


    this.saveEmployee();
  }


}