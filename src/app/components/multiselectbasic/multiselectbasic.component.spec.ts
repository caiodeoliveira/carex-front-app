import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectbasicComponent } from './multiselectbasic.component';

describe('MultiselectbasicComponent', () => {
  let component: MultiselectbasicComponent;
  let fixture: ComponentFixture<MultiselectbasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectbasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiselectbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
