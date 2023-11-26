import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoListagemFuncionarioComponent } from './servico-listagem-funcionario.component';

describe('ServicoListagemFuncionarioComponent', () => {
  let component: ServicoListagemFuncionarioComponent;
  let fixture: ComponentFixture<ServicoListagemFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicoListagemFuncionarioComponent]
    });
    fixture = TestBed.createComponent(ServicoListagemFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
