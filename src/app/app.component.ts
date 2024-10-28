import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Programmings } from './models/programmings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  breakpointActive: string = ""; 
  inputTextValue: string = "empty";
  imagesBasePath: string = "../assets/imgs";

  displaySchedullingPage: boolean = true;

  programmings: Programmings[] = [
    {
      status: "Confirmado",
      name: "José Fabrício",
      date: new Date(),
      phone: "(83)9 8485-2235",
      paymentType: "Particular",
      location: "Marcos Freire, Jaboatão"
    },
    {
      status: "Agendado",
      name: "Maria Severina",
      date: new Date(),
      phone: "(15)9 9848-3818",
      paymentType: "Convênio",
      location: "Clínica Care X"
    },
    {
      status: "Agendado",
      name: "Eronildo Silveira",
      date: new Date(),
      phone: "(15)9 98632-2992",
      paymentType: "Convênio",
      location: "Casa Caiada, Olinda"
    },
    {
      status: "Confirmado",
      name: "Ivanilson Nascimento",
      date: new Date(),
      phone: "(15)9 98454-3234",
      paymentType: "Convênio",
      location: "Arthur Lundgren 2, Paulista"
    },
    {
      status: "Agendado",
      name: "João Bartolomeu",
      date: new Date(),
      phone: "(15)9 98632-2992",
      paymentType: "Convênio",
      location: "Clínica Care X"
    },
    {
      status: "Confirmado",
      name: "Sebastião Neto",
      date: new Date(),
      phone: "(15)9 98632-2992",
      paymentType: "Convênio",
      location: "Clínica Care X, Recife"
    },
    {
      status: "Confirmado",
      name: "Dalva Mércia",
      date: new Date(),
      phone: "(15)9 98632-2992",
      paymentType: "Convênio",
      location: "Bairro novo, Olinda"
    },
    {
      status: "Confirmado",
      name: "Cleide Viturino",
      date: new Date(),
      phone: "(15)9 98333-5893",
      paymentType: "Convênio",
      location: "Janga, Paulista"
    },
    {
      status: "Agendado",
      name: "Ricardo Roberto",
      date: new Date(),
      phone: "(15)9 98632-2992",
      paymentType: "Convênio",
      location: "Tamarineira, Recife"
    },
  ]

  displayProgrammingsPage: boolean = false;
  
  modalDisplayRule = true;
  displayLoginModal: boolean = false;
  
  constructor(private responsive: BreakpointObserver) {};

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

  }

}
