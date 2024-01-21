import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }

  server_URL = "http://localhost:3000"


  authorization(){
   return this.http.get(`${this.server_URL}/employee/1`)

  }
  addEmployeeAPI(employee:employeeModel){
    return this.http.post(`${this.server_URL}/employee`,employee)
  }

  getAllEmployeeApi(){
    return this.http.get(`${this.server_URL}/employee`)
  }

  deleteAPI(id:string){
    return this.http.delete(`${this.server_URL}/employee/${id}`)
  }

  viewEmployeeAPi(id:string){
    return this.http.get(`${this.server_URL}/employee/${id}`)
  }
  //to update

  updateEmployee(id:any,employee:any){
    return this.http.put(`${this.server_URL}/employee/${id}`,employee)
  }

  
}


