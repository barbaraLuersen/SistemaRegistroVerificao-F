import { Component } from '@angular/core';

@Component({
  selector: 'app-servico-cadastro',
  templateUrl: './servico-cadastro.component.html',
  styleUrls: ['./servico-cadastro.component.scss']
})
export class ServicoCadastroComponent {

  public mostrar: boolean;

  public mostrarOcorrencia(){
    this.mostrar = !this.mostrar;
  }
}
