import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { Payment } from 'src/app/models/form';


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
  @Input() chosenSchedullingCity: string | undefined;
  @Input() advanceModalSchedullingFee: string = ""

  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onConfirmTerapy: EventEmitter<boolean> = new EventEmitter();
  @Output() onFinishTerapy: EventEmitter<boolean> = new EventEmitter();
  @Output() onSignIn: EventEmitter<boolean> = new EventEmitter();
  @Output() onCloseAdvanceModal: EventEmitter<boolean> = new EventEmitter();
  @Output() onConfirmAdvanceModal: EventEmitter<boolean> = new EventEmitter();
  @Output() onCloseSuccessModal: EventEmitter<boolean> = new EventEmitter();
  @Output() onCloseAndBackToHome: EventEmitter<boolean> = new EventEmitter();
  
  paymentTypeList: Payment[];
  paymentTypeSelected: Payment;
  
  paymentTypeSelectedToShow: string = "PIX"

  loginInputFieldValue: string;
  recoveryFieldCodeValue: string;

  displayRecoveryPasswordInput: boolean = false;

  advanceDescription: string = "";

  scheduleCode: string = Math.floor(Math.random() * 1000000).toString();

  alertIcon = faExclamation;

  schedullingCity: string | undefined;

  schedullingFee: string;

  showPaymentOptions: boolean;

  advanceModalHeader: string;

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

    if(!typeof this.chosenSchedullingCity == undefined) {
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
    this.successScheduleModalDisplay = true;
  }

  onFinishScheduleModal() {
    this.onFinishTerapy.emit(false);
  }

  closeAndBackToHome() {
    this.onCloseAndBackToHome.emit(true);
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
    if(!typeof this.advanceModalSchedullingFee == undefined) {
      this.advanceModalHeader = 'Adiantamento'
      this.advanceDescription = `Para concluir o agendamento e reservar o horário de atendimento, solicitamos o pagamento da seguinte taxa: R$ ${this.advanceModalSchedullingFee}`;
    }
    else {
      this.advanceModalHeader = 'Estamos quase lá...'
      this.advanceDescription = 'Atenção, o cancelamento / adiamento da consulta só poderá ser efetuada com no mínimo 24 horas de antecedência.';
      this.showPaymentOptions = false;
    }
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

        default: this.advanceModalSchedullingFee = "0";
    }
  }
  // TODO: Dar um jeito de ao disparar o método goToFinishSchedule do componente schedulling, executar a função matchCitySelected para verificar a variável com o valor da cidade e jogar no template.

}