import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from './../../shared/service/usuario.service';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss'],
})
export class UsuarioCadastroComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  public cargos: string[] = [];
  public niveis: string[] = [];

  @ViewChild('ngForm')
  public ngForm: NgForm;

  mascaraCpf = createMask('999.999.999-99');
  cpf = new FormControl('');

  mascaraTelefone = createMask('(99) 99999-9999');
  telefone = new FormControl('');

  mascaraCtps = createMask('9999999/9999');
  ctps = new FormControl('');

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usuarioService.listarCargos().subscribe(
      (resultado) => {
        this.cargos = resultado;
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao buscar os cargos: ' + erro, 'error');
      }
    );

    this.usuarioService.listarNiveis().subscribe(
      (resultado) => {
        this.niveis = resultado;
      },
      (erro) => {
        Swal.fire(
          'Erro',
          'Erro ao buscar os níveis de acesso: ' + erro,
          'error'
        );
      }
    );
  }

  inserirUsuario() {
    //TODO Fazer replace dos campos cpf, telefone e ctpf e lembrar de voltar o tamanho do atributo no banco de dados
    this.usuarioService.inserir(this.usuario).subscribe(
      (sucesso) => {
        Swal.fire('Sucesso', 'Usuario cadastrado!', 'success');
        this.usuario = new Usuario();
      },
      (erro) => {
        Swal.fire(
          'Erro',
          'Erro ao cadastrar usuario: ' + 'preencha todos os campos',
          'error'
        );
      }
    );
  }
}
