import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () => import('./core/usuarios/usuarios.module').then(m => m.UsuariosModule)
  },
  {
    path: 'servicoPrestado',
    loadChildren: () => import('./core/servicos/servicos.module').then(m => m.ServicoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
