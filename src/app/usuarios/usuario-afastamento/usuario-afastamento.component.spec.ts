import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAfastamentoComponent } from './usuario-afastamento.component';

describe('UsuarioAfastamentoComponent', () => {
  let component: UsuarioAfastamentoComponent;
  let fixture: ComponentFixture<UsuarioAfastamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioAfastamentoComponent]
    });
    fixture = TestBed.createComponent(UsuarioAfastamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
