import {Component, Input, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'steps',
  templateUrl: 'steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class Steps implements OnInit{
  
  @Input() breakpointValue: string;
  
  items: MenuItem[];
  
  constructor() {}

  ngOnInit() {
    this.items = [
      {
          label: 'Escolha uma terapia ',
          routerLink: 'personal',
      },
      {
          label: 'Escolha uma data',
          routerLink: 'seat'
      },
      {
          label: 'Pagamento',
          routerLink: 'payment'
      },
  ];
  console.log('BreakpointValue received in step: ', this.breakpointValue)
  }
}