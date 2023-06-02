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
  
  constructor(private responsive: BreakpointObserver) {}
  
  ngOnInit() {
    this.responsive.observe(Breakpoints.XSmall).subscribe(result => {
      this.isPhonePortrait = false;

      if(result.matches) {
        this.isPhonePortrait = true;
        console.log(`Screens matches ${Breakpoints.XSmall}`)
      }
    })

    this.responsive.observe(Breakpoints.Large).subscribe(result => {
      this.isLargeDevice = false;
      console.log(`Screens matches ${Breakpoints.Large}`)
      if(result.matches) {
      this.isLargeDevice = true;
      }
    }) 
  }

}

