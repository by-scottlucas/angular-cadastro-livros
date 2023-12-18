import { Injectable } from '@angular/core';
import { ILogs } from '../model/ILogs';
import { StorageService } from './storage.service';

const logsStorageKey = 'Lista_Logs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private logs!: ILogs[];

  constructor(private storageService: StorageService) {
    this.logs = this.storageService.getData(logsStorageKey) || [];
  }

  private saveLogs(): void {
    try {
      this.storageService.setData(logsStorageKey, this.logs);
    } catch (error) {
      console.error('Não foi possível salvar o log. Erro:', error);
    }
  }

  addLog(message: string, tipo: string): void {
    const timestamp = new Date();
    const logMessage: ILogs = {
      modificacao: [message],
      hora: this.formatarHora(timestamp),
      data: this.formatarData(timestamp),
      tipo: tipo
    };
    this.logs.push(logMessage);
    this.saveLogs();
  }

  getLogs(): ILogs[] {
    return this.logs;
  }

  clearLogs(): void {
    this.logs.splice(0, this.logs.length);
    this.saveLogs();
  }  

  private formatarHora(data: Date): string {
    return data.toLocaleTimeString();
  }

  private formatarData(data: Date): string {
    return data.toLocaleDateString();
  }

}
