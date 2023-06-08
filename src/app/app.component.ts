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
  
   getHeaderBreakpoint(): string {
    switch(this.breakpointActive) {
      case "isPhonePortrait":
        return "phone-portrait-header";
        case "isLargeDevice":
          return "large-device-header";
          case "isXLarge":
            return "x-large-header";
            default: return "is-large-device";
    }
  }

  getHomeBreakpoints(): string {
    switch(this.breakpointActive) {
      case "isPhonePortrait":
        return "phone-portrait-home";
        case "isLargeDevice":
          return "large-device-home";
          case "isXLarge":
            return "x-large-home";
            default: return "large-device-home";
    }
  }

}
