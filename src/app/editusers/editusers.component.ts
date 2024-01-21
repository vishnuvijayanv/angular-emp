import { Component, OnInit } from '@angular/core';
import { employeeModel } from '../employee.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {
employee:employeeModel={}
constructor(private route:ActivatedRoute,private api:AdminapiService,private router:Router){}

ngOnInit(): void {
  this.route.params.subscribe((res:any)=>{
    console.log(res);
    const {id} = res
    this.viewEmployee(id)

  })


}

viewEmployee(id:string){
this.api.viewEmployeeAPi(id).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.employee=res
    
  },
  error:(err)=>{
    console.log(err);
    
  }
})
  

}

editEmployee(id:any,event: Event){
  this.api.updateEmployee(id,this.employee).subscribe({
    next:(res:any)=>{
      event.preventDefault(); // Prevent the default form submission behavior

      console.log(res);
      alert('updated succcessfully')
      this.router.navigateByUrl('/employees')

    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

cancelBtn(id:any){
  this.viewEmployee(id)

}

}
