import { Usuario } from './usuario';
import { Sala } from './sala';
import { Atividade } from './atividade';
import { Ocorrencia } from './ocorrencia';

export class Servico {
  id: number;
  sala: Sala;
  dataHoraInicio: Date;
  dataHoraFim: Date;
  usuario: Usuario;
  atividades: Atividade[];
  ocorrencia: Ocorrencia = new Ocorrencia();
}
