import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  breakpointActive: string = ""; 

  protected getActiveBreakpoint(): string {
    switch(this.breakpointActive) {
      case "isPhonePortrait":
        return "is-phone-portrait";
        case "isLargeDevice":
          return "is-large-device";
          case "isXLarge":
            return "is-x-large";
            default: return "is-large-device";
    }
  }
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
    this.getActiveBreakpoint();
  }
}

