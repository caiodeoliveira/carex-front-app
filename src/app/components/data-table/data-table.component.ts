import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Hour } from 'src/app/models/form';
import { RescheduleProgrammingDTO } from 'src/app/models/programmings';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private dataService: DataService) {};

  @Input() tableData: any[];
  @Input() dataTableType: string = "";

  @Output() onRescheduleProgramming: EventEmitter<boolean> = new EventEmitter();

  paginatorActivator: boolean;
  
  isConfirmedSchedule: string = "";
  
  isUndoButtonActive: boolean = false;
  
  dataInCache: any;
  
  lastAction: string = "";

  isReschedullingFieldActive: boolean = false;

  pt: any;

  reschedullingDate: Date | undefined;

  unavailableDates: any[] = [];
  
  availableHours: Hour[] = [];
  selectedHour: Hour | undefined;

  attendanceIsChosen: boolean = false;

  rescheduleProgrammingId: number;
  rescheduleProgramming: RescheduleProgrammingDTO;

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

  toggleReschedullingField() {
    if(!this.isReschedullingFieldActive) {
      
      this.isReschedullingFieldActive = true;
      this.getUnavailableDates();
      }

    else {
      this.isReschedullingFieldActive = false;
      this.reschedullingDate = undefined;
      this.selectedHour = undefined;
    }
    
  }

  getUnavailableDates() {
    this.dataService.getAllUnavailableDates().subscribe(obs => {

      obs.forEach((obj:any) => {
        this.unavailableDates.push(new Date(obj.date))
      })      
    })
  }

  getAndSetAvailableHoursOptions() {
    this.dataService.getAllAvailableHoursByDate(this.reschedullingDate).subscribe(obs => {

      obs.forEach((obj: any) => {
      const hasDuplicatedHour = this.availableHours.some((hourObj) => hourObj.value ==  obj.hour)
        
        if(!hasDuplicatedHour) {
          this.availableHours.push({value: obj.hour});
          this.availableHours.sort((hourA, hourB) => {
            return hourA.value.localeCompare(hourB.value);
          })
        }
      })

    })
  }

activateAttendanceHourField() {
    this.attendanceIsChosen = true;
  }

  doRescheduleProgramming() {
    this.tableData.forEach((programming) => {
      this.rescheduleProgrammingId = programming.id;

       this.rescheduleProgramming = {
        newAttendanceDate: this.reschedullingDate,
        newAttendanceHour: this.selectedHour?.value,
        attendanceCode: programming.attendanceCode
      }
      
    })
    
    this.onRescheduleProgramming.emit(true);
    this.tableData = [];
    setTimeout(() => {
      this.dataService.rescheduleProgramming(this.rescheduleProgrammingId ,this.rescheduleProgramming).subscribe(obs => {
        this.tableData.push(obs)
      });
      this.onRescheduleProgramming.emit(false);
    }, 1000);

    this.toggleReschedullingField();
  }

}
