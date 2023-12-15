import { Injectable } from "@angular/core";
import { ICadastroLivro } from "../model/ICadastro-livro";
import { StorageService } from "./storage.service";

const livrosStorageKey = 'Lista_Livros';

@Injectable({
    providedIn: 'root'
})
export class CadastroFormService {

    livros!: ICadastroLivro[];

    constructor(private storageService: StorageService) {
        this.livros = storageService.getData(livrosStorageKey);
    }

    saveList() {
        this.storageService.setData(livrosStorageKey, this.livros);
    }

    adicionar(tituloRecebido: string, paginasRecebidas: number, dataRecebida: string): void {
        this.livros.push({ titulo: tituloRecebido, paginas: paginasRecebidas, data: dataRecebida });
        this.saveList();
    }

    listaLivros(index: number): ICadastroLivro {
        return this.livros[index];
    }

    salvarEdit(index: number, livroEdicao: string, paginasEdicao: number, dataEdicao: string): void {
        this.livros[index] = { titulo: livroEdicao, paginas: paginasEdicao, data: dataEdicao };
        this.saveList();
    }

    excluir(index: number): void {
        this.livros.splice(index, 1);
        this.saveList();
    }

}