import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(private responsive:BreakpointObserver) {}

  currentBreakPoint: string = ""; 
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

    this.getCurrentBreakPoint();
  }
  
  getCurrentBreakPoint() {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result: any) => {
      if(result.matches) {
        this.currentBreakPoint = 'mobile';
      }
    })

    // this.responsive.observe(Breakpoints.HandsetLandscape).subscribe(result => {
    //   if(result.matches) {
    //     this.currentBreakPoint = 'mobile';
    //   }
    // }) 

    this.responsive.observe(Breakpoints.TabletPortrait).subscribe(result => {
      if(result.matches) {
        this.currentBreakPoint = "tablet";
      }
    })

    // this.responsive.observe(Breakpoints.TabletLandscape).subscribe(result => {
    //   if(result.matches) {
    //     this.currentBreakPoint = "tablet";
    //   }
    // })

    this.responsive.observe(Breakpoints.WebPortrait).subscribe(result => {
      if(result.matches) {
        this.currentBreakPoint = "web-portrait";
      }
    })
    
    this.responsive.observe(Breakpoints.WebLandscape).subscribe(result => {
      if(result.matches) {
        this.currentBreakPoint = "web-landscape";
      }
    })
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
