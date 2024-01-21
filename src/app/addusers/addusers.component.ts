import { Component } from '@angular/core';
import {  employeeModel } from '../employee.model';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent {
  //variable to store the value 
employee:employeeModel = {}

constructor(private api:AdminapiService){}
cancelEmployee(){
  console.log(this.employee);
  
  this.employee={}
}
addEmployee(){

  console.log(this.employee);
  if (!this.employee.name || !this.employee.id || !this.employee.email || !this.employee.status) {
    alert('plase fill the form')
    
  }
 else{
  this.api.addEmployeeAPI(this.employee).subscribe({
    next:(res:employeeModel)=>{
      console.log(res);
      alert(`${res.name} added successfully`)
      
    },
    error:(err:any)=>{
      console.log(err);
      alert("Request Failed")
      
    }
  })
  
 }
  
}

onSubmit(event: Event) {
  event.preventDefault(); // Prevent the default form submission behavior
  this.addEmployee(); // Handle the form submission
}

}


