import { UsuarioService } from './../../shared/service/usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioSeletor } from 'src/app/shared/model/seletor/usuario.seletor';
import { Usuario } from 'src/app/shared/model/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.scss'],
})
export class UsuarioListagemComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  public usuarios: Array<Usuario> = new Array();
  public seletor: UsuarioSeletor = new UsuarioSeletor();
  public cargos: string[] = [];

  @ViewChild('ngForm')
  public ngForm: NgForm;

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
  }

  filtrarUsuario() {
    this.usuarioService.listarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.usuarios = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar usuarios', erro);
      }
    );
  }

  voltarUsuario() {
    this.router.navigate(['/usuarios']);
  }

  exportarUsuario() {}
}
