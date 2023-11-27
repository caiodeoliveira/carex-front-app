import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
  schedulingBackgroundImages: any[] = [
    // {
    //   small: "scheduling-background-small.png",
    // },
    // {
    //   average: "scheduling-background-average.png",
    // },
    {
      large: "/scheduling-background-large.png",
    },
  ];  

  backIcon = faChevronLeft;
  nextIcon = faChevronRight

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
  
  // scrollToScheduleScreen(el: HTMLElement) {
  //  scrollTo({
  //   top: 1000,
  //   behavior: "s"
  //  })
  // }
}
