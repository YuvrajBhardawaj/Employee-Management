import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../../material/material.module';

@Component({
  selector: 'app-allemp',
  imports: [MaterialModule],
  templateUrl: './allemp.component.html',
  styleUrl: './allemp.component.css'
})
export class AllempComponent implements OnInit{
  constructor(private adminService : AdminService, private router : Router){}
  employees:any={};
  displayedColumns=["serial", "Name", "Email", "Active", "Completed", "Failed"];
  onSelect(employee: any){
    this.router.navigate([`/auth/admin/employees/${employee.id}`],{state:{employee}})
  }
  ngOnInit(): void {
    // Call the service method to get the employees
    this.adminService.getEmployees().subscribe(
      (res) => {
        this.employees = res;  // Assign the data to the employees array
      },
      (error) => {
        console.error('Error fetching data', error);  // Handle errors
      }
    );
  }
}
