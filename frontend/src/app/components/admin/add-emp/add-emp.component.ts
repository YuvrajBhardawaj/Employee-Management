import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  imports: [MaterialModule, FormsModule],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css'
})
export class AddEmpComponent {
  name:string="";
  email:string="";
  password:string="";
  activeTasks:number=0;
  completedTasks:number=0;
  tasksFailed:number=0;
  visibility:boolean=true;
}
