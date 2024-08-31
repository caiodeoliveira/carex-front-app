import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingsComponent } from './programmings.component';

describe('ProgrammingsComponent', () => {
  let component: ProgrammingsComponent;
  let fixture: ComponentFixture<ProgrammingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
