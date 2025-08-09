import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapEventTechAppComponent } from './leap-event-tech-app.component';

describe('LeapEventTechAppComponent', () => {
  let component: LeapEventTechAppComponent;
  let fixture: ComponentFixture<LeapEventTechAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeapEventTechAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeapEventTechAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
