import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MjesecniNajamKnjigaComponent } from './mjesecni-najam-knjiga.component';

describe('MjesecniNajamKnjigaComponent', () => {
  let component: MjesecniNajamKnjigaComponent;
  let fixture: ComponentFixture<MjesecniNajamKnjigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MjesecniNajamKnjigaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MjesecniNajamKnjigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
