import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { EmployeeService } from '../app/employee.service';
import { CompanyService } from './company.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService, CompanyService]
})
export class AppComponent {
  title = 'app works!';
constructor() {
  
}

   // Initialize Firebase
 
}
