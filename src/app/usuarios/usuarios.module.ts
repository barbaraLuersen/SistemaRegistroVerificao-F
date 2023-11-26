import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';
import { UsuarioEdicaoComponent } from './usuario-edicao/usuario-edicao.component';
import { UsuarioAfastamentoComponent } from './usuario-afastamento/usuario-afastamento.component';


@NgModule({
  declarations: [
    UsuarioCadastroComponent,
    UsuarioPerfilComponent,
    UsuarioListagemComponent,
    UsuarioEdicaoComponent,
    UsuarioAfastamentoComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
