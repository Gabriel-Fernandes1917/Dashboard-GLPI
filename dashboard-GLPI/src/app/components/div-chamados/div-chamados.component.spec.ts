import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivChamadosComponent } from './div-chamados.component';

describe('DivChamadosComponent', () => {
  let component: DivChamadosComponent;
  let fixture: ComponentFixture<DivChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivChamadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
