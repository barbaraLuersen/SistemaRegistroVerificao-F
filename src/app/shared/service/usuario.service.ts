import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { UsuarioSeletor } from '../model/seletor/usuario.seletor';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly API = 'http://localhost:8080/api/usuarios';

  constructor(private httpClient: HttpClient) {
    //TODO: Implementar métodos
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.API, usuario);
  }
}
