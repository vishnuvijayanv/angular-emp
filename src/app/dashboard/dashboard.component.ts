import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showSidebar:boolean=true
  employeeCount:Number=0

  selected: Date | null = new Date();

  profileImage:string = './assets/images/user.jpg'

  empStatus : boolean = false
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions= {};

constructor(private api:AdminapiService){
  this.chartOptions={
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Egg Yolk Composition'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Chrome',
                    y: 55.02
                },
                {
                    name: 'safari',
                    sliced: true,
                    selected: true,
                    y: 26.71
                },
                {
                    name: 'edge',
                    y: 1.09
                },
                {
                    name: 'brave',
                    y: 15.5
                },
                {
                    name: 'Ash',
                    y: 1.68
                }
            ]
        }
    ]
}
HC_exporting(Highcharts);
}

ngOnInit(): void {
  this.totalEmployee()
}
  menuBar(){
    this.showSidebar=!this.showSidebar
  }

  totalEmployee(){
    this.api.getAllEmployeeApi().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.employeeCount=res.length
        

      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })

  }
editProfile(){
  this.empStatus=true

}
}
