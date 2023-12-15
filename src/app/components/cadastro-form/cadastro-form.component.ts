import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroLivro } from 'src/app/model/ICadastro-livro';
import { CadastroFormService } from 'src/app/services/cadastro-form.service';

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

  constructor(private cadastroService: CadastroFormService, private router: Router) {
    this.listaLivros = this.cadastroService.livros;
  }

  adicionarLivro(): void {
    this.cadastroService.adicionar(this.titulo, this.paginas, this.data.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1'));
    alert("Livro cadastrado com sucesso!");
    this.router.navigate(["/cadastrados"]);
  }

}
