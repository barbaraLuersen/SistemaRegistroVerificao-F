import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from '../model/servico';
import { ServicoSeletor } from '../model/seletor/servico.seletor';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private readonly API = 'http://localhost:8080/api/servicoPrestado';

  constructor(private httpClient: HttpClient) {
    //TODO: Implementar métodos
  }
}
