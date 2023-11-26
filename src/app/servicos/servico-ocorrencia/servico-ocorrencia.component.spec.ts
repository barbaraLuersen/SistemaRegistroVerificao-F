import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoOcorrenciaComponent } from './servico-ocorrencia.component';

describe('ServicoOcorrenciaComponent', () => {
  let component: ServicoOcorrenciaComponent;
  let fixture: ComponentFixture<ServicoOcorrenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicoOcorrenciaComponent]
    });
    fixture = TestBed.createComponent(ServicoOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
