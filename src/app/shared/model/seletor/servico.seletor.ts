import { BaseSeletor } from './base.seletor';

export class ServicoSeletor extends BaseSeletor {
  sala: string;
  menorDataHoraInicio: Date;
  menorDataHoraFim: Date;
  maiorDataHoraInicio: Date;
  maiorDataHoraFim: Date;
  idTipoOcorrencia: number;
  cargo: string;
  usuario: string;
  atividade: string;
}
