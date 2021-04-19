import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExpandComponent } from './dashboard-expand.component';

describe('DashboardExpandComponent', () => {
  let component: DashboardExpandComponent;
  let fixture: ComponentFixture<DashboardExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardExpandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
