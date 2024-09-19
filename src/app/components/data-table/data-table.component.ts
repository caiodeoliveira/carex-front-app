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
  isUndoButtonActive: boolean = false;
  dataInCache: any;
  lastAction: string = "";

  ngOnInit(): void {
      this.paginatorActivator = true;
      this.filterRowsWhereStatusIsConfirmed();
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
    console.log('before undo last Action -> ', this.tableData);
    if(this.lastAction == 'delete') {
      this.tableData.push(this.dataInCache);
      console.log('tableData After undo last action -> ', this.tableData);
    }
    else if(this.lastAction == 'confirmation') {
      this.tableData.forEach((row) => {
        if(row.name == this.dataInCache.name) {
          row.status = 'Agendado';
        }
      })
    }
    console.log(this.tableData)
  }
}
