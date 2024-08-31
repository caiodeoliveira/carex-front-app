import { Component, EventEmitter, Output } from '@angular/core';
import {global} from '../../../global';
@Component({
  selector: 'app-terapies',
  templateUrl: './terapies.component.html',
  styleUrls: ['./terapies.component.scss']
})
export class TerapiesComponent {

  @Output() onTerapyConfirmed: EventEmitter<boolean> = new EventEmitter();
  @Output() advanceModalterapyType: string;

  headerOne: string = global.terapies.headers.alternativeTerapies;
  headerTwo: string = global.terapies.headers.physioteraphyTerapies;

  displayModal: boolean = false;

  isTerapyConfirmed: boolean;

  alternativeTerapiesData: any = [
    {
      img: global.terapies.path.alternatives.acupunture,
      altText: "imagem de uma Auriculoterapia",
      name: global.terapies.names.acupunture
    },
    {
      img: global.terapies.path.alternatives.earAcupunture,
      altText: "imagem de uma acupuntura terapia",
      name: global.terapies.names.earAcupunture
    },
    {
      img: global.terapies.path.alternatives.myofacialRelease,
      altText: "imagem de uma terapia myofacial",
      name: global.terapies.names.myofacialRelease
    },
    {
      img: global.terapies.path.alternatives.suctionCup,
      altText: "imagem de uma ventosaterapia",
      name: global.terapies.names.suctionCup
    },
  ];

  physioTerapiesData: any = [
    {
      img: global.terapies.path.pelvicPhysioterapy,
      altText: "imagem de uma Fiosioterapia Pélvica",
      name: global.terapies.names.pelvicPhysioterapy
    },
    {
      img: global.terapies.path.obstetricPhysioterapy,
      altText: "imagem de uma Fisioterapia Obstétrica",
      name: global.terapies.names.obstetricPhysioterapy
    },
    {
      img: global.terapies.path.doulage,
      altText: "imagem de uma Doulagem",
      name: global.terapies.names.doulage
    },
  ]

  modalType: string = "terapy-choose"

  imageToShowOnModalOpen: string;

  showModalAndGetImage(imageToShow: string) {
    this.displayModal = true;
    this.imageToShowOnModalOpen = imageToShow;
    this.getTerapyType(imageToShow);
  }

  hideModal() {
    this.displayModal = false;
  }

  setModalConfirmationData($event: boolean) {
    this.isTerapyConfirmed = $event;
    this.onTerapyConfirmed.emit(true);
  }


  getTerapyType(terapyImageName: string) {
    this.advanceModalterapyType = terapyImageName;
    this.advanceModalterapyType == global.terapies.path.pelvicPhysioterapy || terapyImageName == global.terapies.path.obstetricPhysioterapy || 
    terapyImageName == global.terapies.path.doulage ? this.advanceModalterapyType = 'physioterapy' : this.advanceModalterapyType = 'alternative';
  }

}
