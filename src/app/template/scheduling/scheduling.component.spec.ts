import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiesComponent } from './scheduling.component';

describe('TerapiesComponent', () => {
  let component: TerapiesComponent;
  let fixture: ComponentFixture<TerapiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerapiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
