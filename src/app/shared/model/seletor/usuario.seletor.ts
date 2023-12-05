import { BaseSeletor } from './base.seletor';

export class UsuarioSeletor extends BaseSeletor {
  nome: string;
  cargo: string;
  statusUsuario: string;
  dataDesligamentoInicio: Date;
  dataDesligamentoFim: Date;
}
