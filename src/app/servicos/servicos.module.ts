import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicoCadastroComponent } from './servico-cadastro/servico-cadastro.component';
import { ServicoListagemComponent } from './servico-listagem/servico-listagem.component';
import { ServicoOcorrenciaComponent } from './servico-ocorrencia/servico-ocorrencia.component';
import { ServicoListagemGerenciaComponent } from './servico-listagem-gerencia/servico-listagem-gerencia.component';
import { ServicoListagemFuncionarioComponent } from './servico-listagem-funcionario/servico-listagem-funcionario.component';


@NgModule({
  declarations: [
    ServicoCadastroComponent,
    ServicoListagemComponent,
    ServicoOcorrenciaComponent,
    ServicoListagemGerenciaComponent,
    ServicoListagemFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule
  ]
})
export class ServicosModule { }
