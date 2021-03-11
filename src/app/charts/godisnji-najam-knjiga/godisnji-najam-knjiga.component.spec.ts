import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodisnjiNajamKnjigaComponent } from './godisnji-najam-knjiga.component';

describe('GodisnjiNajamKnjigaComponent', () => {
  let component: GodisnjiNajamKnjigaComponent;
  let fixture: ComponentFixture<GodisnjiNajamKnjigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodisnjiNajamKnjigaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodisnjiNajamKnjigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
