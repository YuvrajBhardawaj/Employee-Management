import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-mytasks',
  imports: [MaterialModule],
  templateUrl: './mytasks.component.html',
  styleUrl: './mytasks.component.css'
})
export class MytasksComponent implements OnInit{
  constructor(private empService : EmployeeService){}
  displayedColumns: string[] = ['Name','createdAt'];
  tasks:any={};
  ngOnInit(): void {
    this.empService.getTasks().subscribe(
      (res)=>this.tasks=res,
      (err)=>console.log(err)
    );
  }
}
