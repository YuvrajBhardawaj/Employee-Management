import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../../material/material.module';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-emp-tasks',
  imports: [MaterialModule],
  templateUrl: './emp-tasks.component.html',
  styleUrl: './emp-tasks.component.css'
})
export class EmpTasksComponent implements OnInit{
  employee:any;
  constructor(private router: Router, private empService : AdminService, private route : ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras.state?.['employee'];
    console.log(this.employee);
  }
  tasks:any={};
  displayedColumns: string[] = ['Name','createdAt','status'];
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') || "";
    this.empService.getEmpTasks(id).subscribe(
      (res)=>this.tasks=res,
      (err)=>console.log(err)
    );
  }
}
