import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

interface PaymentType {
  type: string;
  code: string;
}

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {

  @Input() terapyModalDisplay: boolean = false;
  @Input() advanceModaldisplay: boolean = false;
  @Input() successScheduleModalDisplay: boolean = false;
  @Input() loginModalDisplay: boolean = true;
  @Input() type: string;
  @Input() terapyModalImage: string;
  @Input() modalTerapyName: string;
  @Input() modalTerapyDescription: string;
  @Input() chosenSchedullingCity: string;
  @Input() advanceModalSchedullingFee: string;

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

  alertIcon = faExclamation;

  schedullingCity: string;

  schedullingFee: string;

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

    this.setAdvanceModalDescription();
    this.schedullingCity = this.chosenSchedullingCity;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['chosenSchedullingCity'].currentValue) {
      // console.log('chosenCity Has value -> ', changes['chosenSchedullingCity'].currentValue);
      this.matchCitySelectedWithSchedullingFee(changes['chosenSchedullingCity'].currentValue);
    }
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

  setAdvanceModalDescription() {
      this.advanceDescription = `Para concluir o agendamento e reservar o horário de atendimento, solicitamos o pagamento da seguinte taxa: R$ ${this.advanceModalSchedullingFee}`
  }

  matchCitySelectedWithSchedullingFee(citySelected: string) {
    switch(citySelected) {
      case 'Paulista':
        this.advanceModalSchedullingFee = '36';
        this.setAdvanceModalDescription();
        break;
      case 'Olinda':
        this.advanceModalSchedullingFee = '52';
        this.setAdvanceModalDescription();
        break;
      case 'Recife':
        this.advanceModalSchedullingFee = '72';
        this.setAdvanceModalDescription();
        break;
      case 'Boa Viagem':
        this.advanceModalSchedullingFee = '72';
        this.setAdvanceModalDescription();
        break;
      case 'Abreu e Lima':
        this.advanceModalSchedullingFee = '52';
        this.setAdvanceModalDescription();
        break;
      case 'Igarassu':
        this.advanceModalSchedullingFee = '52';
        this.setAdvanceModalDescription();
        break;
      case 'Itapissuma':
        this.advanceModalSchedullingFee = '72';
        this.setAdvanceModalDescription();
        break;

        default: "12345";
    }
  }
  // TODO: Dar um jeito de ao disparar o método goToFinishSchedule do componente schedulling, executar a função matchCitySelected para verificar a variável com o valor da cidade e jogar no template.

}