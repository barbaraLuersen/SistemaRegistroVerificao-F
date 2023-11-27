import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from './../../shared/service/usuario.service';
import Swal from 'sweetalert2';
import { Afastamento } from 'src/app/shared/model/afastamento';
import * as moment from 'moment';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss'],
})
export class UsuarioCadastroComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  public id: number;
  public nome: string;
  public cpf: string;
  public telefone: string;
  public dataNacimento: Date;
  public ctps: string;
  public nivelAcesso: string;
  public cargo: string;
  public matricula: string;
  public senha: string;
  public dataContratacao: Date;
  public statusUsuario: string;
  public afastamentos: Afastamento[] = [];
  public dataDesligamento: Date;

  @ViewChild('ngForm')
  public ngForm: NgForm;

  constructor(
    private UsuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //TODO Setar data de hoje (PROBLEMA COM DATE)
    //const dataContratacao = new Date();
    //this.dataContratacao = Date.parse(dataContratacao);
  }

  inserirUsuario() {
    this.UsuarioService.inserir(this.usuario).subscribe(
      (sucesso) => {
        Swal.fire('Sucesso', 'Usuario cadastrado!', 'success');
        this.usuario = new Usuario();
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao cadastrar usuario: ' + erro, 'error');
      }
    );
  }
}
