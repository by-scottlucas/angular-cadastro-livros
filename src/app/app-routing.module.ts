import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';
import { LoginComponent } from './components/login/login.component';
import { LogsComponent } from './components/logs/logs.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroFormComponent },
  {path:'cadastrados', component: ListaLivrosComponent},
  {path: 'logs', component: LogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
