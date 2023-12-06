import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicoCadastroComponent } from './servico-cadastro/servico-cadastro.component';
import { ServicoOcorrenciaComponent } from './servico-ocorrencia/servico-ocorrencia.component';
import { ServicoListagemGerenciaComponent } from './servico-listagem-gerencia/servico-listagem-gerencia.component';
import { ServicoListagemFuncionarioComponent } from './servico-listagem-funcionario/servico-listagem-funcionario.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrCodeComponent } from './qr-code/qr-code.component';

@NgModule({
  declarations: [
    ServicoCadastroComponent,
    ServicoOcorrenciaComponent,
    ServicoListagemGerenciaComponent,
    ServicoListagemFuncionarioComponent,
    QrCodeComponent,
  ],
  imports: [CommonModule, ServicosRoutingModule, FormsModule, ZXingScannerModule],
})
export class ServicosModule {}
