import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTasksComponent } from './emp-tasks.component';

describe('EmpTasksComponent', () => {
  let component: EmpTasksComponent;
  let fixture: ComponentFixture<EmpTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
