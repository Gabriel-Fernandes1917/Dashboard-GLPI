import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivAtividadesComponent } from './div-atividades.component';

describe('DivAtividadesComponent', () => {
  let component: DivAtividadesComponent;
  let fixture: ComponentFixture<DivAtividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivAtividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
