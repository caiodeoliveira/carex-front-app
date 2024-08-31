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
  @Input() loginModalDisplay: boolean = true;
  @Input() type: string;
  @Input() terapyModalImage: string;
  @Input() terapyType: string;
  
  
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onConfirmTerapy: EventEmitter<boolean> = new EventEmitter();
  @Output() onFinishTerapy: EventEmitter<boolean> = new EventEmitter();
  @Output() onSignIn: EventEmitter<boolean> = new EventEmitter();
  

  terapyTitle: string;
  terapyDescription: string;
  
  paymentTypeList: PaymentType[];
  paymentTypeSelected: PaymentType;
  
  paymentTypeSelectedToShow: string = "PIX"

  loginInputFieldValue: string;
  recoveryFieldCodeValue: string;

  displayRecoveryPasswordInput: boolean = false;

  modalAdvanceText: string;

  ngOnInit(): void {
    this.paymentTypeList = [
      {
        type: "Forma de Pagamento",
        code: "1"
      },
      {
        type: "Crédito",
        code: "2"
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
    this.loginModalDisplay = false;
    this.onClose.emit()
    }

  confirmTerapy() {
    this.onConfirmTerapy.emit(true);
    this.terapyModalDisplay = false;
    this.advanceModaldisplay = false;
    this.finishScheduleModalDisplay = false;
    this.getModalAdvanceText(this.terapyType)
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

  confirmLoginPassword() {
    alert('Successfull!')
  }

  displayRecoveryPasswordField() {
    this.displayRecoveryPasswordInput = true;
  }

  signIn() {
    this.loginModalDisplay = false;
    this.onSignIn.emit(true);
  }

  getModalAdvanceText(terapyType: string) {
    // console.log('terapy type -> ' + terapyType); O valor está chegando até aqui. TODO: Descobrir porque não exibe no template.
    if(terapyType == 'physioterapy') {
      this.modalAdvanceText = "Para consultas á domicílio, solicitamos um adiantamento de 20% do valor da consulta";
    } 
    else {
      this.modalAdvanceText = "A avaliação é gratuita, mas solicitamos uma garantia no valor de R$ 20, que será devolvida após o atendimento.";
    }
    console.log(this.modalAdvanceText)
  }

}