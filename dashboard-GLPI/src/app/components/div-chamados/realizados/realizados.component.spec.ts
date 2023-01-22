import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizadosComponent } from './realizados.component';

describe('RealizadosComponent', () => {
  let component: RealizadosComponent;
  let fixture: ComponentFixture<RealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
