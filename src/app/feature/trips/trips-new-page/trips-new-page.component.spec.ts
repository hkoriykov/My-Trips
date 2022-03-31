import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsNewPageComponent } from './trips-new-page.component';

describe('TripsNewPageComponent', () => {
  let component: TripsNewPageComponent;
  let fixture: ComponentFixture<TripsNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
