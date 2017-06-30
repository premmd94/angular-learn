import { Component, ElementRef, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CompanyService } from '../company.service';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  lists = [];
  companiees = [];
  constructor(private getEmployees: EmployeeService, private getCompanys: CompanyService) { }
  
  ngOnInit(): any {
     this.getCompanys.getCompany().subscribe(resCompany => this.companiees = resCompany);
    this.getEmployees.getEmployee().subscribe(resData => this.lists = resData);
     $(function(){
       $('body').click(function(){
          $('.about-col').find('.about-detail').slideUp();
       });
        $('.about-col').on('click', function(event){
          event.stopPropagation();
          $(this).find('.about-detail').slideToggle();
         $(this).siblings().find('.about-detail').slideUp();
         
         
        });
        
      
       
        
     });
     
  }

}
 