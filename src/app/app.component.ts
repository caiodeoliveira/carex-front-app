import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  breakpointActive: string = ""; 

  constructor(private responsive: BreakpointObserver) {}
  
  ngOnInit() {
    this.responsive.observe(Breakpoints.XSmall).subscribe(result => {
      if(result.matches) {
         this.breakpointActive = 'isPhonePortrait';
      }
    })

    this.responsive.observe(Breakpoints.Large).subscribe(result => {
      if(result.matches) {
        this.breakpointActive = 'isLargeDevice';
      }
    }) 

    this.responsive.observe(Breakpoints.XLarge).subscribe(result => {
      if(result.matches) {
        this.breakpointActive = "isXLarge"
      }
    })
  }
  
   getBreakpoints(): string {
    switch(this.breakpointActive) {
      case "isPhonePortrait":
        return "phone-portrait";
        case "isLargeDevice":
          return "large-device";
          case "isXLarge":
            return "x-large";
            default: return "is-large-device";
    }
  }
}
