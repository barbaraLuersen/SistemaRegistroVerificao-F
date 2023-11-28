import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';
import { Observable } from 'rxjs';
import { CategoriaSeletor } from '../model/seletor/categoria.seletor';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private readonly API = 'http://localhost:8080/api/categoria';

  constructor(private httpClient: HttpClient) {}
  inserir(categoria: Categoria): Observable<Categoria> {
    return this.httpClient.post<Categoria>(this.API, categoria);
  }

  atualizar(categoria: Categoria): Observable<Categoria> {
    return this.httpClient.put<Categoria>(this.API, categoria);
  }

  pesquisarPorId(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(this.API + '/' + id);
  }

  listarTodos(): Observable<Array<Categoria>> {
    return this.httpClient.get<Array<Categoria>>(this.API + '/todos');
  }

  listarComSeletor(seletor: CategoriaSeletor) {
    return this.httpClient.post<Array<Categoria>>(
      this.API + '/filtro',
      seletor
    );
  }
}
