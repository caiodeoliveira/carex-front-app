import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(private responsive: BreakpointObserver) {};

  breakpointActive: string = ""; 
  inputTextValue: string = "empty";
  imagesBasePath: string = "../assets/imgs";

  displaySchedullingPage: boolean = true;

  displayProgrammingsPage: boolean = false;
  
  modalDisplayRule = true;
  displayLoginModal: boolean = false;
  
  
  ngOnInit() {

    const keyboardEvent = (event: any) => {
			if (event.repeat) {
				return;
			}
      // To display the modal you will need the combination of the three keys in the if below: CTRL + SHIFT + L.
			if (event.ctrlKey && event.shiftKey && event.keyCode == 76) {
        this.modalDisplayRule = true;
        this.displayLoginModal = true;
			}
		};

		document.onkeydown = keyboardEvent;

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

  getProfileImageByScreenSize(): string {
    if(this.breakpointActive == "isPhonePortrait") {
     return "../assets/imgs/profile_photo_small.jpg";
    }
    else if(this.breakpointActive == "isLargeDevice") {
      return "../assets/imgs/profile_photo_average.jpg"
    }
      else if (this.breakpointActive == "isXLarge") {
        return "../assets/imgs/profile_photo_xlarge.jpg";
      }
      return "null";
  }
  
  showSchedullingPage($event: boolean) {
    this.displaySchedullingPage = $event;
    this.scrollToPage('schedulling');
  }

  hideSchedullingPage($event: boolean) {
    this.scrollToPage('terapies');

    setTimeout(() => {
      this.displaySchedullingPage = $event;
      }, 800)
  }

  hideModal() {
    this.displayLoginModal = false;
  }

  doSignIn($event: boolean) {
    this.displayProgrammingsPage = $event;
    this.displayLoginModal = false;
    this.modalDisplayRule = false;

    setTimeout(() => {
      const element = document.getElementById('programmings');
      element?.scrollIntoView({ behavior: 'smooth'});
    }, 1000)
  }

  scrollToPage(page: string) {
    if(page == 'schedulling') {
      setTimeout(() => {
        const element = document.getElementById(page);
        element?.scrollIntoView({ behavior: 'smooth'});
        }, 300)
    }
    if(page == 'terapies') {
      const element = document.getElementById(page);
      element?.scrollIntoView({ behavior: 'smooth'});
    }

    if(page == 'about') {
      const element = document.getElementById(page);
      element?.scrollIntoView({ behavior: 'smooth'});
    }

    if(page == 'home') {
      const element = document.getElementById(page);
      element?.scrollIntoView({ behavior: 'smooth'});
    }
  }
}
