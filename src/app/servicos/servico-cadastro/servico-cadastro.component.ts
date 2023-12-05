import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from 'src/app/shared/model/atividade';
import { Categoria } from 'src/app/shared/model/categoria';
import { Ocorrencia } from 'src/app/shared/model/ocorrencia';
import { Sala } from 'src/app/shared/model/sala';
import { Servico } from 'src/app/shared/model/servico';
import { AtividadeService } from 'src/app/shared/service/atividade.service';
import { CategoriaService } from 'src/app/shared/service/categoria.service';
import { OcorrenciaService } from 'src/app/shared/service/ocorrencia.service';
import { SalaService } from 'src/app/shared/service/sala.service';
import { ServicoService } from 'src/app/shared/service/servico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servico-cadastro',
  templateUrl: './servico-cadastro.component.html',
  styleUrls: ['./servico-cadastro.component.scss']
})
export class ServicoCadastroComponent {
  constructor(
    private servicoService: ServicoService,
    private ocorrenciaService: OcorrenciaService,
    private categoriaService: CategoriaService,
    public atividadeService: AtividadeService,
    public salaService: SalaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public servico: Servico = new Servico();
  public categorias: Categoria[];
  public atividades: Atividade[];
  public sala: Sala;
  public ocorrencia: Ocorrencia = new Ocorrencia();
  public categoriaSelecionada: Categoria;

  public mostrar: boolean = false;
  public esconder: boolean = true;
  public horaFim: boolean;

  @ViewChild('ngForm')
  public ngForm: NgForm;

  public mostrarOcorrencia(){
    this.mostrar = !this.mostrar;
    this.esconder = !this.esconder;

    this.categoriaService.listarTodos().subscribe(
      (resultado) => {
        this.categorias = resultado;
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao buscar as categorias de ocorrências: ' + erro, 'error');
      }
    );
  }

  public mostrarHoraFim() {
    this.servico.dataHoraFim = new Date();
  }

  ngOnInit(): void {
    this.servico.dataHoraInicio = new Date();
    // TODO
    // this.servico.sala.numero = this.sala.numero;
    this.atividadeService.listarTodos().subscribe(
      (resultado) => {
        this.atividades = resultado;
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao buscar as atividades de serviços: ' + erro, 'error');
      }
    );
    this.servico.ocorrencia.categorias = new Array();
  }

  inserirServicoPrestado() {
    this.servico.dataHoraFim = new Date();
    this.servico.atividades = this.selecionados;
    this.servico.ocorrencia.categorias.push(this.categoriaSelecionada);
    this.servicoService.inserir(this.servico).subscribe(
      (sucesso) => {
        Swal.fire('Sucesso', 'Serviço cadastrado!', 'success');
        this.servico = new Servico();
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao cadastrar o serviço: ' + erro, 'error');
      }
    );
  }

  get selecionados() {
    return this.atividades.filter(item => item.selecionado);
  }
}
