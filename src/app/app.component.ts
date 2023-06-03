import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isPhonePortrait: boolean = false;
  isLargeDevice: boolean = false;
  
  // pt-BR O Array breakPointList será usado para verificar o tipo de dispositivo na responsividade
  breakpointsList: string[] = []; 
  arrWithoutDuplicate: string[] = [];

  constructor(private responsive: BreakpointObserver) {}
  
  ngOnInit() {

    this.responsive.observe(Breakpoints.XSmall).subscribe(result => {
      this.isPhonePortrait = false;

      if(result.matches) {
        this.isPhonePortrait = true;
        this.breakpointsList.push('isPhonePortrait')
        
        this.arrWithoutDuplicate = this.breakpointsList.filter((element, index) => {
          return element.indexOf(element) === index;
        })
         console.log(`Screens matches ${Breakpoints.XSmall}`);
      }



    })

    this.responsive.observe(Breakpoints.Large).subscribe(result => {
      this.isLargeDevice = false;

      if(result.matches) {
        this.isLargeDevice = true;
        this.breakpointsList.push('isLargeDevice');

        this.arrWithoutDuplicate = this.breakpointsList.filter((element, index) => {
          return element.indexOf(element) === index;
        })
        console.log(`Screens matches ${Breakpoints.Large}`)
        console.log(this.arrWithoutDuplicate)
      }
    }) 
  }
 // pt-BR Corrigir função de novo array com filtragem. Não está permitindo adicionar um novo item, mesmo que ele seja diferente.
}

