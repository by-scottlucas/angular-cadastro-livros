import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';
import { LoginComponent } from './components/login/login.component';
import { LogsComponent } from './components/logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroFormComponent,
    ListaLivrosComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
