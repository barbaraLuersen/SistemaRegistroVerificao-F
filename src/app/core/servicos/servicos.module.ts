import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoRoutingModule } from './servicos-routing.module';
import { ServicoDetalheComponent } from './servico-detalhe/servico-detalhe.component';
import { ServicoListagemComponent } from './servico-listagem/servico-listagem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ServicoDetalheComponent,
    ServicoListagemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ServicoRoutingModule
  ]
})
export class ServicoModule { }
