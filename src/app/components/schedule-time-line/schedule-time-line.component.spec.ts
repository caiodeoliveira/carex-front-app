import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTimeLineComponent } from './schedule-time-line.component';

describe('ScheduleTimeLineComponent', () => {
  let component: ScheduleTimeLineComponent;
  let fixture: ComponentFixture<ScheduleTimeLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleTimeLineComponent]
    });
    fixture = TestBed.createComponent(ScheduleTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
