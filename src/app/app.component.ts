import { Component, ElementRef } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

interface Programmings {
  name: string,
  date: Date;
  phone: string,
  paymentType: string,
  location: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  breakpointActive: string = ""; 
  inputTextValue: string = "empty";
  imagesBasePath: string = "../assets/imgs";

  medicineServices: any[] = [
    {
      name: "Ventosaterapia",
      x_large_img: "/suction_cup_tp_small.png"
    },
    {
      name: "Liberação Miofacial",
      x_large_img: "/myofacial_release_tp_small.png"
    },
    {
      name: "Acupuntura",
      x_large_img: "/dry_nedling_tp_small.png"
    },
    {
      name: "Auriculoterapia",
      x_large_img: "/ear_acupunture_tp_small.png"
    },
]

  displaySchedullingPage: boolean;

  headers: string[];

  programmings: Programmings[] = [
    {
      name: "José Fabrício",
      date: new Date(),
      phone: "(83)9 8485-2235",
      paymentType: "Particular",
      location: "Marcos Freire, Jaboatão"
    },
    {
      name: "Maria Severina",
      date: new Date(),
      phone: "(15)9 9848-3818",
      paymentType: "Convênio",
      location: "Clínica Care X"
    },
    {
      name: "Eronildo Silveira",
      date: new Date(),
      phone: "(15)9 98632-2992",
      paymentType: "Convênio",
      location: "Casa Caiada, Olinda"
    },
    {
      name: "Ivanilson Nascimento",
      date: new Date(),
      phone: "(15)9 98454-3234",
      paymentType: "Convênio",
      location: "Arthur Lundgren 2, Paulista"
    },
    {
      name: "João Bartolomeu",
      date: new Date(),
      phone: "(15)9 98632-2992",
      paymentType: "Convênio",
      location: "Clínica Care X"
    },
    {
      name: "Sebastião Neto",
      date: new Date(),
      phone: "(15)9 98632-2992",
      paymentType: "Convênio",
      location: "Clínica Care X, Recife"
    },
    {
      name: "Dalva Mércia",
      date: new Date(),
      phone: "(15)9 98632-2992",
      paymentType: "Convênio",
      location: "Bairro novo, Olinda"
    },
    {
      name: "Cleide Viturino",
      date: new Date(),
      phone: "(15)9 98333-5893",
      paymentType: "Convênio",
      location: "Janga, Paulista"
    },
    {
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

  isTerapySelectedPhysioterapyType: boolean;
  
  constructor(private responsive: BreakpointObserver, private elementRef: ElementRef) {};
  

smothScroll() {
  const elementToExecuteScroll = this.elementRef.nativeElement.querySelector('schedulling');
  elementToExecuteScroll.scrollIntoView({behavior : 'smooth'})
}

  ngOnInit() {

    const keyboardEvent = (event: any) => {
			if (event.repeat) {
				return;
			}

      // Para exibir o modal será necessário a combinação das três teclas no if abaixo: CTRL + SHIFT + L.
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

    this.headers = ['Nome', 'Data', 'Hora', 'Cel', 'Pagamento', 'Local'];
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
    this.scrollToSchedullingPage();
  }

  hideSchedullingPage($event: boolean) {
    const element = document.getElementById('terapies');
    element?.scrollIntoView({ behavior: 'smooth'});

    setTimeout(() => {
      this.displaySchedullingPage = $event;
      }, 800)
  }
  
  scrollToSchedullingPage() {
    setTimeout(() => {
    const element = document.getElementById('schedulling');
    element?.scrollIntoView({ behavior: 'smooth'});
    }, 300)
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

  setTerapyType($event: string) {
    console.log('Terapy Type value in App Component -> ' + $event);

    if($event == "physioterapy") {
      this.isTerapySelectedPhysioterapyType = true;
    }
  }

}
