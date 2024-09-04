import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

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
  @Input() successScheduleModalDisplay: boolean = false;
  @Input() loginModalDisplay: boolean = true;
  @Input() type: string;
  @Input() terapyModalImage: string;
  @Input() isPhysioterapyType: boolean;
  @Input() modalTerapyName: string;
  @Input() modalTerapyDescription: string;

  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onConfirmTerapy: EventEmitter<boolean> = new EventEmitter();
  @Output() onFinishTerapy: EventEmitter<boolean> = new EventEmitter();
  @Output() onSignIn: EventEmitter<boolean> = new EventEmitter();
  @Output() onCloseAdvanceModal: EventEmitter<boolean> = new EventEmitter();
  @Output() onConfirmAdvanceModal: EventEmitter<boolean> = new EventEmitter();
  @Output() onCloseSuccessModal: EventEmitter<boolean> = new EventEmitter();
  
  paymentTypeList: PaymentType[];
  paymentTypeSelected: PaymentType;
  
  paymentTypeSelectedToShow: string = "PIX"

  loginInputFieldValue: string;
  recoveryFieldCodeValue: string;

  displayRecoveryPasswordInput: boolean = false;

  advanceDescription: string = "";

  scheduleCode: string = Math.floor(Math.random() * 1000000).toString();

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

    this.checkTerapyType();
  }

  closeTerapyModal() {
    this.terapyModalDisplay = false;
    this.onClose.emit();
  }

  closeAdvanceModal() {
    this.advanceModaldisplay = false;
    this.onCloseAdvanceModal.emit(false);
  }

  closeSuccessSchedullingModal() {
    this.successScheduleModalDisplay = false;
    this.onClose.emit();
    }

  closeLoginModal() {
    this.loginModalDisplay = false;
    this.onClose.emit();
    }

  confirmTerapy() {
    this.onConfirmTerapy.emit(true);
    this.closeTerapyModal();
  }

  confirmTerapyScheduling() {
    this.onConfirmAdvanceModal.emit(true);
    this.successScheduleModalDisplay = false;
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

  checkTerapyType() {
    if(this.isPhysioterapyType) {
      this.advanceDescription = "Para consultas à domicílio, solicitamos um adiantamento de 20% do valor da consulta."
    }
    else {
      this.advanceDescription = "A avaliação é gratuita, mas solicitamos um adiantamento de 20% do valor Após a realização da consulta o valor será devolvido. Em caso de cancelamento da avaliação com menos de 12h de antecedência, o valor não poderá ser resarcido."
    }
  }

}