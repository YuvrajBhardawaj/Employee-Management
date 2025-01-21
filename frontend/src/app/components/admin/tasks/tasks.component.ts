import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-tasks',
  imports: [MaterialModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tasks:any={};
  displayedColumns=["Task","Created_At","Count"];
  constructor(private adminService : AdminService){}
  ngOnInit(): void {
    this.adminService.getTasks().subscribe(
      (res)=>this.tasks=res,
      (err)=>console.log(err)
    );
  }
}
