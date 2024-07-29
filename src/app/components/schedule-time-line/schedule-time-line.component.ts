import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schedule-time-line',
  templateUrl: './schedule-time-line.component.html',
  styleUrls: ['./schedule-time-line.component.scss']
})
export class ScheduleTimeLineComponent implements OnInit{
  events: any[];
  backIcon = faChevronLeft;
  nextIcon = faChevronRight;
  serviceInfos: any[] = [
    {
      img: '/imgs/suction_cup_tp_small.png', 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      img: '/imgs/myofacial_release_tp_small.png', 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      img: '/imgs/dry_nedling_tp_small.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      img:  '/imgs/ear_acupunture_tp_small.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ];
  serviceInfosIndex: number = 0;
  date: Date;
  daysDisabled: number[];
  name: string = "";
  sex: string = "";
  age: number;
  identificationNumber: number;
  isHomeCare: string = "";
  address: string = "";
  isFirstConsult: string = "";
  
    constructor() {
        this.events = [
          { passo: 'Preenchimento de Dados', icon: 'pi pi-check', color: '#FF9800', data_fill: true },
          { passo: 'Escolha uma terapia', icon: 'pi pi-shopping-cart', color: '#9C27B0', teraphy_choices: true },
          { passo: 'Escolha uma data', icon: 'pi pi-cog', color: '#673AB7', scheduling: true },
            { passo: 'Pagamento', icon: 'pi pi-check', color: '#607D8B', payment: true }
          ];
        }
          
      ngOnInit(): void {
        this.daysDisabled = [];
        this.daysDisabled.push(5, 10, 15, 20, 25)
      }

      previousTeraphy(): void {
        this.serviceInfosIndex -= 1;
      }

      nextTeraphy(): void {
        this.serviceInfosIndex += 1;
      }
}
