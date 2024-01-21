import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import { employeeModel } from '../employee.model';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  // oninit is an interface to implement ngOninit
  allEmployee : employeeModel[]=[]
  
  searchKey:string=""

  //for Pagination
  p: number = 1;
  constructor(private api:AdminapiService){}

  // lifecycle hook - call just afer the component is created and constructor is called
ngOnInit(): void {
  this.allUsers()
}
  allUsers(){
    this.api.getAllEmployeeApi().subscribe({
      next:(res:any)=>{
        this.allEmployee=res
        console.log(this.allEmployee);
        
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }

    })
  }


  removeEmployee(id:any){
    this.api.deleteAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allUsers()
        

      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  }

  sortId(){
    this.allEmployee.sort((a:any,b:any)=>a.id-b.id)
  }
  sortName(){
    this.allEmployee.sort((a:any,b:any)=>a.name.localeCompare(b.name))
  }

  generatePdf(){
    const pdf = new jsPDF()

    let head:any=[['id','Employee Name','Email','Status']]
    let body:any=[]

    this.allEmployee.forEach((item)=>{
      body.push([item.id , item.name,item.email,item.status])
    })

    //font Size

    pdf.setFontSize(16)

    //title

    pdf.text('Employee Details',10,10)

    // table 


    autoTable(pdf,{head,body})
    //to open in new tab

    pdf.output('dataurlnewwindow')

    //save and download

    pdf.save('employee.pdf')

  }
}
