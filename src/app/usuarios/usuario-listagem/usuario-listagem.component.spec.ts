import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListagemComponent } from './usuario-listagem.component';

describe('UsuarioListagemComponent', () => {
  let component: UsuarioListagemComponent;
  let fixture: ComponentFixture<UsuarioListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioListagemComponent]
    });
    fixture = TestBed.createComponent(UsuarioListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
