import { Categoria } from './categoria';
import { Servico } from './servico';

export class Ocorrencia {
  id: number;
  descricao: string;
  categorias: Categoria[];
  status: boolean;
  dataOcorrencia: Date;
  servicoPrestado: Servico;
}
