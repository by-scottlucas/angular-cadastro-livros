import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroLivro } from 'src/app/model/ICadastro-livro';
import { CadastroFormService } from 'src/app/services/cadastro-form.service';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent {

  titulo!: string;
  paginas!: number;
  data!: string;
  listaLivros!: ICadastroLivro[];

  constructor(private cadastroService: CadastroFormService, private logsService: LogsService, private router: Router) {
    this.listaLivros = this.cadastroService.getLivros();
  }

  adicionarLivro(): void {
    const dataFormatada = this.data.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');

    this.cadastroService.adicionar(this.titulo, this.paginas, dataFormatada);
    
    alert("Livro cadastrado com sucesso!");

    this.router.navigate(["lista"]);

    const novoLog = `Livro Cadastrado: ${this.titulo} | Páginas: ${this.paginas} | Lido em: ${dataFormatada}`
    this.logsService.addLog(novoLog, "Adição");
  }
}
