import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
const MaterialComponents=[
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  CommonModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule
];
@NgModule({
  declarations: [],
  imports: [...MaterialComponents],
  exports:[...MaterialComponents]
})
export class MaterialModule { }