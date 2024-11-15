import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {global} from '../../../global';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-terapies',
  templateUrl: './terapies.component.html',
  styleUrls: ['./terapies.component.scss']
})
export class TerapiesComponent implements OnInit {

  constructor(private dataService: DataService) {}

  @Output() onTerapyConfirmed: EventEmitter<boolean> = new EventEmitter();
  @Output() onSetTerapyType: EventEmitter<string> = new EventEmitter();

  headerOne: string = global.terapies.headers.alternativeTerapies;
  headerTwo: string = global.terapies.headers.physioteraphyTerapies;

  displayModal: boolean = false;

  isTerapyConfirmed: boolean;

  modalType: string = "terapy-choose"

  imageToShowOnModalOpen: string;

  terapyName: string;
  terapyDescription: string;

  alternativeTerapiesData$: any[] = [];
  physioterapyTerapiesData$: any[] = [];

  displaySkeleton: boolean = true;

  searchScheduleInputValue: string = "";
  searchingForSchedule: boolean = false;
  searchScheduleEvent: any;  

  scheduleFound: any[] = [];

  ngOnInit(): void {
    this.getAllTerapiesData();
  }

  showModalAndGetImage(imageToShow: string, description: string, name: string) {
    this.displayModal = true;
    this.imageToShowOnModalOpen = imageToShow;
    this.checkModalImageByTerapy(name, description);
  }

  hideModal() {
    this.displayModal = false;
  }

  setModalConfirmationData($event: boolean) {
    this.isTerapyConfirmed = $event;
    this.onTerapyConfirmed.emit(true);

    const alternativeTerapyImages: string[] = [];

    this.dataService.getAllTerapies().subscribe(terapies => {
      terapies.forEach((terapy: any) => {
        if(terapy.alternative) {
          alternativeTerapyImages.push(terapy.image);
        }
      })
    })

    alternativeTerapyImages.forEach((altImage: string) => {
      if(this.imageToShowOnModalOpen == altImage) {
        this.onSetTerapyType.emit("alternative");
      }
      else {
        this.onSetTerapyType.emit("physioterapy");
      }
    })
  }

  checkModalImageByTerapy(terapyName: string, terapyDescription: string) {
    this.dataService.getAllTerapyNames().subscribe(name => {

      this.terapyName = name.find((n: any) => n == terapyName);
    })

    this.dataService.getAllTerapyDescriptions().subscribe(description => {
      this.terapyDescription = description.find((d: any) => d == terapyDescription);
    })

  }

  getAllTerapiesData() {
    this.dataService.getAllTerapies().subscribe(response => {

      
      response.forEach((obj: any) => {
        
        if(obj.alternative) {
          this.alternativeTerapiesData$.push(obj);
          setTimeout(() => {
            this.displaySkeleton = false;
          }, 600)
        }
        else {
          this.physioterapyTerapiesData$.push(obj);
        }
      })
    });
  }

  checkSearchFieldValue() {
    clearInterval(this.searchScheduleEvent);

    if(this.searchScheduleInputValue != "") {

      this.searchingForSchedule = true;

      this.searchScheduleEvent = setTimeout(() => {
        this.dataService.getProgrammingByCode(this.searchScheduleInputValue).subscribe(obs => {
          this.scheduleFound.push(obs)
          this.searchingForSchedule = false;
        })        
      }, 6000);

    }
  }
}
