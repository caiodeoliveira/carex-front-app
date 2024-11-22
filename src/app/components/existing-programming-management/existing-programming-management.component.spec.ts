import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingProgrammingManagementComponent } from './existing-programming-management.component';

describe('ExistingProgrammingManagementComponent', () => {
  let component: ExistingProgrammingManagementComponent;
  let fixture: ComponentFixture<ExistingProgrammingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingProgrammingManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingProgrammingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
