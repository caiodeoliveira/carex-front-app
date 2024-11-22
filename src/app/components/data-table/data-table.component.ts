import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {};

  @Input() tableData: any[];
  @Input() dataTableType: string = "";

  @Output() onRescheduleProgramming: EventEmitter<boolean> = new EventEmitter();

  paginatorActivator: boolean = true;
  
  isConfirmedSchedule: string = "";
  
  isUndoButtonActive: boolean = false;
  
  dataInCache: any;
  
  lastAction: string = "";

  pt: any;

  ngOnInit(): void {
      this.paginatorActivator = false;
      this.filterRowsWhereStatusIsConfirmed();

      this.pt = {
        firstDayOfWeek: 0,
        dayNames: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
        dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
        dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
        monthNames: [ "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro" ],
        monthNamesShort: [ "jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez" ],
        today: 'Hoje',
        clear: 'Limpar'
      };

      this.primengConfig.setTranslation(this.pt);
    }

  confirmSchedule(tableDataConfirmed: any) {
    this.isConfirmedSchedule = "confirmed";
    tableDataConfirmed.status = "Confirmado";
    this.lastAction = "confirmation";
    this.dataInCache = tableDataConfirmed;
    this.filterRowsWhereStatusIsConfirmed();
    this.activateUndoLasActionButton();
  }

  deleteSchedule(tableDataToBeDeleted: any) {
    const existingRows = this.tableData.filter(rowData => rowData != tableDataToBeDeleted);
    this.lastAction = "delete";
    this.dataInCache = tableDataToBeDeleted;
    this.getExistingRows(existingRows);
    this.activateUndoLasActionButton();
  }

  filterRowsWhereStatusIsConfirmed() {
    this.setscheduleRowAsConfirmed();
  }

  setscheduleRowAsConfirmed() {
    this.isConfirmedSchedule = "confirmed";
  }

  getExistingRows(tableDataNewState: any[]) {
    this.tableData = tableDataNewState;
  }

  activateUndoLasActionButton() {
    this.isUndoButtonActive = true;
  }

  deactivateUndoLasActionButton() {
    this.isUndoButtonActive = false;
  }

  undoLastAction() {
    if(this.lastAction == 'delete') {
      this.tableData.push(this.dataInCache);
      this.lastAction = "";
      this.isUndoButtonActive = false;
    }
    else if(this.lastAction == 'confirmation') {
      this.tableData.forEach((row) => {
        if(row.name == this.dataInCache.name) {
          row.status = 'Agendado';
        }
      })
      this.lastAction = "";
      this.isUndoButtonActive = false;
    }
  }

  getEmptyFieldsData() {
    this.tableData.forEach((dataObj) => {
      dataObj.attendanceCity ? dataObj.attendanceCity : dataObj.attendanceCity = "Recife";
      dataObj.attendanceAddress ? dataObj.attendanceAddress : dataObj.attendanceCity = "Rua Djalma Farias, 251, Torreão, Recife - PE";
    })
  }

}
