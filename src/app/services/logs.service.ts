import { Injectable } from '@angular/core';
import { ILogs } from '../model/ILogs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  listaLogs!: ILogs[];

  constructor() { }

  addRegistro(modificacao: string[], hora: string, data: string, tipo: string) {
    this.listaLogs.push({ modificacao: modificacao, hora: hora, data: data, tipo: tipo });
  }
}
