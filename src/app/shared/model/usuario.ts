import { Afastamento } from './afastamento';

//TODO: Implementar
export class Usuario {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  dataNacimento: Date;
  ctps: string;
  nivelAcesso: string;
  cargo: string;
  matricula: string;
  senha: string;
  dataContratacao: Date;
  statusUsuario: string;
  afastamentos: Afastamento[];
  dataDesligamento: Date;
}
