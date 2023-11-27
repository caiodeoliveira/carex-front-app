import { Component } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schedule-time-line',
  templateUrl: './schedule-time-line.component.html',
  styleUrls: ['./schedule-time-line.component.scss']
})
export class ScheduleTimeLineComponent {
  events: any[];
  backIcon = faChevronLeft;
  nextIcon = faChevronRight;

    constructor() {
        this.events = [
            { passo: 'Escolha uma terapia', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: '../assets/imgs/suction_cup_tp_small.png' },
            { passo: 'Escolha uma data', icon: 'pi pi-cog', color: '#673AB7' },
            { passo: 'Pagamento', icon: 'pi pi-check', color: '#FF9800' },
            { passo: 'Concluído', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}
