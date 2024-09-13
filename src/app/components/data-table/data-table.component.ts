import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() tableHeaders: string[];
  @Input() tableData: any[];

  paginatorActivator: boolean;
  isConfirmedSchedule: string = "";
  tableExists: boolean = true;

  ngOnInit(): void {
      this.paginatorActivator = true;
      this.filterRowsWhereStatusIsConfirmed();
  }

  confirmSchedule(tableDataToBeConfirmed: any) {
    this.isConfirmedSchedule = "confirmed";
    tableDataToBeConfirmed.status = "Confirmado";
    this.filterRowsWhereStatusIsConfirmed();
  }

  cancelSchedule(tableDataToBeDeleted: any) {
    Object.keys(tableDataToBeDeleted).forEach(key => {
      if(typeof tableDataToBeDeleted[key] === 'string') {
        tableDataToBeDeleted[key] = "";
      }
      if(tableDataToBeDeleted['date'] instanceof Date) {
        tableDataToBeDeleted[key] = "";
      }
    })
    this.tableExists = false;
  }

  filterRowsWhereStatusIsConfirmed() {
    this.tableData.filter((rowData) => rowData.status == 'Confirmado');
    this.setscheduleRowAsConfirmed();
  }

  setscheduleRowAsConfirmed() {
    this.isConfirmedSchedule = "confirmed";
  }

  /*
    Pesquisar como fazer para ao chamar o método cancelSchedule remover de tela apenas a linha da tabela que foi deletada. Atualmente usando uma variável, eu
    não consegui fazer isso pois combinei a variável com o ngIf no template mas escondia todas as linhas.
    Ver se vai ser necessário usar o ngOnChanges.
  */
}
