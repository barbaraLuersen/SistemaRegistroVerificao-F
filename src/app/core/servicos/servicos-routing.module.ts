import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoDetalheComponent } from './servico-detalhe/servico-detalhe.component';
import { ServicoListagemComponent } from './servico-listagem/servico-listagem.component';

const routes: Routes = [
  {path: '', component: ServicoDetalheComponent},
  {path: '', component: ServicoListagemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
