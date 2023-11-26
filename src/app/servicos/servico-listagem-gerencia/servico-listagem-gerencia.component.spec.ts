import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoListagemGerenciaComponent } from './servico-listagem-gerencia.component';

describe('ServicoListagemGerenciaComponent', () => {
  let component: ServicoListagemGerenciaComponent;
  let fixture: ComponentFixture<ServicoListagemGerenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicoListagemGerenciaComponent]
    });
    fixture = TestBed.createComponent(ServicoListagemGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
