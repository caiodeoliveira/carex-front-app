import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import {global} from '../../../global';

interface PaymentType {
  type: string;
  code: string;
}

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() terapyModalDisplay: boolean = false;
  @Input() advanceModaldisplay: boolean = false;
  @Input() finishScheduleModalDisplay: boolean = false;

  @Input() type: string;

  @Input() terapyModalImage: string;

  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onConfirmTerapy: EventEmitter<boolean> = new EventEmitter();
  @Output() onFinishTerapy: EventEmitter<boolean> = new EventEmitter();

  terapyDescription: string;
  terapyTitle: string;

  paymentTypeList: PaymentType[];
  paymentTypeSelected: PaymentType;

  paymentTypeSelectedToShow: string = "PIX"

  ngOnInit(): void {
    this.paymentTypeList = [
      {
        type: "Crédito",
        code: "1"
      },
      {
        type: "Débito",
        code: "2"
      },
      {
        type: "PIX",
        code: "3"
      },
    ]
  }

  onCloseModal() {
    this.terapyModalDisplay = false;
    this.advanceModaldisplay = false;
    this.onClose.emit()
    }

  confirmTerapy() {
    this.onConfirmTerapy.emit(true);
    this.terapyModalDisplay = false;
    this.advanceModaldisplay = false;
    this.finishScheduleModalDisplay = false;
    }
  
  getModalTexts(): string {
    if(this.terapyModalImage.includes('dry_nedling_tp_small')) {
      this.terapyTitle = global.terapies.names.acupunture;
      return this.terapyDescription = global.terapies.modal.description.alternatives.acunputure
    }
    if(this.terapyModalImage.includes('ear_acupunture_tp_small')) {
      this.terapyTitle = global.terapies.names.earAcupunture
      return this.terapyDescription = global.terapies.modal.description.alternatives.acunputure
    }
    if(this.terapyModalImage.includes('myofacial_release_tp_small')) {
      this.terapyTitle = global.terapies.names.myofacialRelease
      return this.terapyDescription = global.terapies.modal.description.alternatives.acunputure
    }
    if(this.terapyModalImage.includes('suction_cup_tp_small')) {
      this.terapyTitle = global.terapies.names.suctionCup
      return this.terapyDescription = global.terapies.modal.description.alternatives.acunputure
    }
    if(this.terapyModalImage.includes('pelvic_physioterapy')) {
      this.terapyTitle = global.terapies.names.pelvicPhysioterapy
      return this.terapyDescription = global.terapies.modal.description.alternatives.acunputure
    }
    if(this.terapyModalImage.includes('obstetric_physioterapy')) {
      this.terapyTitle = global.terapies.names.obstetricPhysioterapy
      return this.terapyDescription = global.terapies.modal.description.alternatives.acunputure
    }
    if(this.terapyModalImage.includes('doulage')) {
      this.terapyTitle = global.terapies.names.doulage
      return this.terapyDescription = global.terapies.modal.description.alternatives.acunputure
    }
    return "";
  }

  onFinishScheduleModal() {
    this.onFinishTerapy.emit(false);
  }
  
  //TODO: Implementar tela de agenda com programação semanal para consulta.
  }