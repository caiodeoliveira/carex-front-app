import { Component, EventEmitter, Output } from '@angular/core';
import {global} from '../../../global';
@Component({
  selector: 'app-terapies',
  templateUrl: './terapies.component.html',
  styleUrls: ['./terapies.component.scss']
})
export class TerapiesComponent {

  @Output() onTerapyConfirmed: EventEmitter<boolean> = new EventEmitter();
  @Output() onSetTerapyType: EventEmitter<string> = new EventEmitter();

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

  terapyName: string;
  terapyDescription: string;

  showModalAndGetImage(imageToShow: string) {
    this.displayModal = true;
    this.imageToShowOnModalOpen = imageToShow;
    this.checkModalImageByTerapy(imageToShow);
  }

  hideModal() {
    this.displayModal = false;
  }

  setModalConfirmationData($event: boolean) {
    this.isTerapyConfirmed = $event;
    this.onTerapyConfirmed.emit(true);

    const isPelvicPhysioterapy = global.terapies.path.pelvicPhysioterapy;
    const obstetricPhysioterapy = global.terapies.path.obstetricPhysioterapy;
    const doulagePhysioterapy = global.terapies.path.doulage;
    if(this.imageToShowOnModalOpen == isPelvicPhysioterapy || this.imageToShowOnModalOpen == obstetricPhysioterapy || this.imageToShowOnModalOpen == doulagePhysioterapy) {
      this.onSetTerapyType.emit("physioterapy");
    }
    else {
      this.onSetTerapyType.emit("alternative");
    }
  }

  checkModalImageByTerapy(terapyImage: string) {
    if(terapyImage.includes('dry_nedling_tp_small')) {
      this.terapyName = global.terapies.names.acupunture;
      this.terapyDescription = global.terapies.modal.description.alternatives.acunputure;
    }
    if(terapyImage.includes('ear_acupunture_tp_small')) {
      this.terapyName = global.terapies.names.earAcupunture;
      this.terapyDescription = global.terapies.modal.description.alternatives.earAcupunture;
    }
    if(terapyImage.includes('myofacial_release_tp_small')) {
      this.terapyName = global.terapies.names.myofacialRelease;
      this.terapyDescription = global.terapies.modal.description.alternatives.myofacialRelease;
    }
    if(terapyImage.includes('suction_cup_tp_small')) {
      this.terapyName = global.terapies.names.suctionCup;
      this.terapyDescription = global.terapies.modal.description.alternatives.suctionCup;
    }
    if(terapyImage.includes('pelvic_physioterapy')) {
      this.terapyName = global.terapies.names.pelvicPhysioterapy;
      this.terapyDescription = global.terapies.modal.description.pelvicPhysioterapy;
    }
    if(terapyImage.includes('obstetric_physioterapy')) {
      this.terapyName = global.terapies.names.obstetricPhysioterapy;
      this.terapyDescription = global.terapies.modal.description.obstetricPhysioterapy;
    }
    if(terapyImage.includes('doulage')) {
      this.terapyName = global.terapies.names.doulage;
      this.terapyDescription = global.terapies.modal.description.doulage;
    }
  }
}
