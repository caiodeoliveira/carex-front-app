import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Hour } from 'src/app/models/form';
import { EmailDTO, RescheduleProgrammingDTO } from 'src/app/models/dto/dtos';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-existing-programming-management',
  templateUrl: './existing-programming-management.component.html',
  styleUrls: ['./existing-programming-management.component.scss']
})
export class ExistingProgrammingManagementComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private dataService: DataService) {};

  @Input() tableData: any[];

  @Output() onRescheduleProgramming: EventEmitter<boolean> = new EventEmitter();

  paginatorActivator: boolean;

  isReschedullingFieldActive: boolean = false;

  pt: any;

  reschedullingDate: Date | undefined;

  unavailableDates: any[] = [];
  
  availableHours: Hour[] = [];
  selectedHour: Hour | undefined;

  attendanceIsChosen: boolean = false;

  rescheduleProgrammingId: number;
  rescheduleProgramming: RescheduleProgrammingDTO;

  emailObject: EmailDTO;

  ngOnInit(): void {
      this.paginatorActivator = false;

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
    this.availableHours = [];

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

      const year = this.reschedullingDate?.getFullYear();
      const month = Number(this.reschedullingDate?.getUTCMonth()) + 1;
      const day = this.reschedullingDate?.getDate();
      const reschedullingDateFormatted = `${day}/${month}/${year}`;

      this.emailObject = {
        to: "dCaioCesar98@gmail.com",
        subject: "Programação Reagendada",
        text: `A consulta de ${programming.name} que seria às ${programming.attendanceHour} foi reagendada. o novo horário é: ${reschedullingDateFormatted} às ${this.selectedHour?.value}. Código da consulta: ${programming.attendanceCode}`
      }

    })
    this.dataService.sendEmailMessage(this.emailObject).subscribe();
    
    this.unavailableDates = [];
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
