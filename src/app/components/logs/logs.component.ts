import { Component } from '@angular/core';
import { ILogs } from 'src/app/model/ILogs';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {

  listaLogs!: ILogs[];

  constructor(private logsService: LogsService) {
    this.listaLogs = logsService.listaLogs;
    console.log(this.listaLogs);
  }

  deletarRegistros() {
    this.listaLogs.shift();
  }

}
