import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.scss'],
})
export class UsuarioDetalheComponent implements OnInit {
  public idUsuario: number;
  public usuario: Usuario = new Usuario();
  public nome: string;
  public cpf: string;
  public telefone: string;
  public dataNascimento: Date;
  public nivelAcesso: string;
  public cargo: string;
  public matricula: string;
  public senha: string;
  public dataContratacao: Date;
  public statusUsuario: string;

  @ViewChild('ngForm')
  public ngForm: NgForm;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataContratacao = new Date();
  }

  salvar(form: NgForm) {
    if (form.invalid) {
      Swal.fire('Atenção', 'Revise, por gentileza', 'warning');
      return;
    }
    this.inserir();
  }

  inserir() {
    //this.usuarioService.inserir(this.usuario).subscribe(
    //(sucesso) => {
    //usar um componente de alertas (importar no app.module.ts)
    //https://github.com/sweetalert2/ngx-sweetalert2
    //Swal.fire(titulo, texto, 'warning');
    Swal.fire('Sucesso', 'Usuario cadastrado!', 'success');
    this.usuario = new Usuario();
    //},
    //(erro) => {
    // Swal.fire('Erro', 'Erro ao cadastrar o usuario: ' + erro, 'error');
    //}
    //);
  }
}
