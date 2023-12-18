import { Injectable } from "@angular/core";
import { ICadastroLivro } from "../model/ICadastro-livro";
import { StorageService } from "./storage.service";

const livrosStorageKey = 'Lista_Livros';

@Injectable({
    providedIn: 'root'
})
export class CadastroFormService {

    private livros!: ICadastroLivro[];

    constructor(private storageService: StorageService) {
        this.livros = this.storageService.getData(livrosStorageKey) || [];
    }

    private saveList(): void {
        try {
            this.storageService.setData(livrosStorageKey, this.livros);
        } catch (error) {
            console.error('Não foi possível salvar o livro. Erro:', error);
        }
    }

    adicionar(titulo: string, paginas: number, data: string): void {
        const novoLivro: ICadastroLivro = { titulo, paginas, data };
        this.livros.push(novoLivro);
        this.saveList();
    }

    listaLivros(index: number): ICadastroLivro {
        return this.livros[index];
    }

    salvarEdicao(index: number, livroEdicao: string, paginasEdicao: number, dataEdicao: string): void {
        this.livros[index] = { titulo: livroEdicao, paginas: paginasEdicao, data: dataEdicao };
        this.saveList();
    }

    excluir(index: number): void {
        this.livros.splice(index, 1);
        this.saveList();
    }

    getLivros(): ICadastroLivro[] {
        return this.livros;
    }
}
