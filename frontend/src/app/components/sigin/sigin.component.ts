import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  imports: [MaterialModule],
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css'
})
export class SiginComponent {
  constructor(private router : Router){}
  onSubmit(){
    this.router.navigate(['/auth/admin'])
  }
}
