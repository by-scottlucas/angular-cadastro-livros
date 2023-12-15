import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroLivro } from 'src/app/model/ICadastro-livro';
import { CadastroFormService } from 'src/app/services/cadastro-form.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent {


  listaLivros!: ICadastroLivro[];
  tituloEditIndex: number | null = null;
  tituloEdit: string | null = null;
  paginasEdit!: number;
  dataEdit!: string;

  constructor(private cadastroService: CadastroFormService, private router: Router) {
    this.listaLivros = this.cadastroService.livros;
  }

  editarLivro(livro: ICadastroLivro): void {
    this.tituloEditIndex = this.listaLivros.indexOf(livro);
    this.tituloEdit = livro.titulo;
    this.paginasEdit = livro.paginas;
    this.dataEdit = livro.data;
  }

  salvarEdicao(): void {

    if (this.tituloEditIndex !== null && this.tituloEdit) {
      this.cadastroService.salvarEdit(this.tituloEditIndex, this.tituloEdit, this.paginasEdit, this.dataEdit.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1'));
      this.limparInputsEdicao();
    }

  }

  private limparInputsEdicao(): void {
    this.tituloEditIndex = null;
    this.tituloEdit = null;
    this.paginasEdit;
    this.dataEdit;
  }

  excluirLivro(index: number): void {
    this.cadastroService.excluir(index);
  }

}
