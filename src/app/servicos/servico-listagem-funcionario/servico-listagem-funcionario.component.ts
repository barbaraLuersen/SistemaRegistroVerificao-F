import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from 'src/app/shared/model/atividade';
import { Sala } from 'src/app/shared/model/sala';
import { Servico } from 'src/app/shared/model/servico';
import { AtividadeService } from 'src/app/shared/service/atividade.service';
import { CategoriaService } from 'src/app/shared/service/categoria.service';
import { OcorrenciaService } from 'src/app/shared/service/ocorrencia.service';
import { SalaService } from 'src/app/shared/service/sala.service';
import { ServicoService } from 'src/app/shared/service/servico.service';
import Swal from 'sweetalert2';
import { ServicoSeletor } from '../../shared/model/seletor/servico.seletor';

@Component({
  selector: 'app-servico-listagem-funcionario',
  templateUrl: './servico-listagem-funcionario.component.html',
  styleUrls: ['./servico-listagem-funcionario.component.scss']
})
export class ServicoListagemFuncionarioComponent {
  constructor(
    private servicoService: ServicoService,
    public atividadeService: AtividadeService,
    public salaService: SalaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public seletor: ServicoSeletor = new ServicoSeletor();
  public servicos: Servico[] = [];
  public atividades: Atividade[];
  public sala: Sala;

  public mostrar: boolean = false;
  public esconder: boolean = true;
  public horaFim: boolean;

  @ViewChild('ngForm')
  public ngForm: NgForm;

  public mostrarOcorrencia(){
    this.mostrar = !this.mostrar;
    this.esconder = !this.esconder;
  }

  ngOnInit(): void {
    // TODO
    // this.servico.sala.numero = this.sala.numero;
    this.servicoService.listarTodos().subscribe(
      (resultado) => {
        this.servicos = resultado;
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao buscar as categorias de ocorrências: ' + erro, 'error');
      }
    );

    this.atividadeService.listarTodos().subscribe(
      (resultado) => {
        this.atividades = resultado;
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao buscar as categorias de ocorrências: ' + erro, 'error');
      }
    );
  }

  listarServicoPrestado() {
    this.servicoService.listarTodos().subscribe(
      (resultado) => {
        Swal.fire('Sucesso', 'Serviços listados!', 'success');
        this.servicos = resultado;
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao listar os serviços: ' + erro, 'error');
      }
    );
  }

  filtrarServico() {
    this.servicoService.listarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.servicos = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar servicos', erro.error);
      }
    );
  }

  public mostrarFiltros() {
    this.mostrar = !this.mostrar;
    this.esconder = !this.esconder;
  }
}
