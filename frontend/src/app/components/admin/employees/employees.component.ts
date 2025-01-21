import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../../../material/material.module';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent{
  
}
