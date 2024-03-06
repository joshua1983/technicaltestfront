import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredReminderComponent } from './required-reminder.component';

describe('RequiredReminderComponent', () => {
  let component: RequiredReminderComponent;
  let fixture: ComponentFixture<RequiredReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredReminderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
