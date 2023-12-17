import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroLivro } from 'src/app/model/ICadastro-livro';
import { CadastroFormService } from 'src/app/services/cadastro-form.service';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent {

  listaLivros!: ICadastroLivro[];

  tituloEditIndex: number | null = null;
  tituloEdit!: string;
  paginasEdit!: number;
  dataEdit!: string;
  boxEdit: boolean = false;

  constructor(private cadastroService: CadastroFormService, private logsService: LogsService, private route: Router) {
    this.listaLivros = this.cadastroService.getLivros();
  }

  editarLivro(livro: ICadastroLivro): void {
    this.tituloEditIndex = this.listaLivros.indexOf(livro);
    this.tituloEdit = livro.titulo;
    this.paginasEdit = livro.paginas;
    this.dataEdit = livro.data;
    this.boxEdit = true;
  }

  salvarEdicao(): void {
    const dataFormatada = this.dataEdit.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');

    if (this.tituloEditIndex !== null && this.tituloEdit) {

      const tituloAntigo = this.listaLivros[this.tituloEditIndex].titulo;

      this.cadastroService.salvarEdicao(this.tituloEditIndex, this.tituloEdit, this.paginasEdit, dataFormatada);

      const novoLog = `Livro Editado: ${tituloAntigo} para ${this.tituloEdit} | Páginas: ${this.paginasEdit} | Lido em: ${dataFormatada}`;
      this.logsService.addLog(novoLog, 'Edição');

      alert("Livro editado com sucesso!");

      this.boxEdit = false;
    }
  }

  excluirLivro(index: number): void {
    const livroExcluido = this.listaLivros[index].titulo
    this.cadastroService.excluir(index);

    const novoLog = `Livro Excluído: ${livroExcluido}`;

    this.logsService.addLog(novoLog, "Exclusão");
  }

}