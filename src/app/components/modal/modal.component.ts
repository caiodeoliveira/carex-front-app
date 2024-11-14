import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { Payment } from 'src/app/models/form';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {

  constructor(private dataService: DataService) {}

  @Input() terapyModalDisplay: boolean = false;
  @Input() advanceModaldisplay: boolean = false;
  @Input() successScheduleModalDisplay: boolean = false;
  @Input() loginModalDisplay: boolean;
  @Input() type: string;
  @Input() terapyModalImage: string;
  @Input() modalTerapyName: string;
  @Input() modalTerapyDescription: string;
  @Input() chosenSchedullingCity: string | undefined;
  @Input() advanceModalSchedullingFee: string = ""
  @Input() schedullingPaymentType: Payment;
  @Input() formDataToSave: {};
  @Input() scheduleCode: string;


  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onConfirmTerapy: EventEmitter<boolean> = new EventEmitter();
  @Output() onFinishTerapy: EventEmitter<boolean> = new EventEmitter();
  @Output() onSignIn: EventEmitter<boolean> = new EventEmitter();
  @Output() onCloseAdvanceModal: EventEmitter<boolean> = new EventEmitter();
  @Output() onConfirmAdvanceModal: EventEmitter<boolean> = new EventEmitter();
  @Output() onCloseSuccessModal: EventEmitter<boolean> = new EventEmitter();
  @Output() onCloseAndBackToHome: EventEmitter<string> = new EventEmitter();
  
  paymentOptionList: Payment[] = [];
  paymentOptionSelected: Payment = {value: ""};
  
  // TODO: Verificar exibição desse valor "PIX" está aparecendo duas vezes no dropdown.
  paymentOptionSelectedToShow: string = "Crédito"

  loginInputFieldValue: string;
  recoveryFieldCodeValue: string;

  displayRecoveryPasswordInput: boolean = false;

  advanceDescription: string = "";

  alertIcon = faExclamation;

  advanceModalHeader: string;

  checked: boolean = false;
  
  ngOnInit(): void {

    this.schedullingPaymentType = {value: ""};

    this.setAdvanceModalDescription();
    this.getAndSetPaymentOptions();
  }

  ngOnChanges(): void {

    if(this.advanceModaldisplay) {
      this.matchCitySelectedWithSchedullingFee(this.chosenSchedullingCity);
    }
  }

  getAndSetPaymentOptions() {
    this.dataService.getAllPaymentOptions().subscribe((obs: string[]) => {
      this.paymentOptionList = [];
      obs.forEach((paymentOption) => {
        this.paymentOptionList.push({value: paymentOption})
      })
    })
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
    this.saveFormData();
  }

  onFinishScheduleModal() {
    this.onFinishTerapy.emit(false);
  }

  closeAndBackToHome() {
    this.successScheduleModalDisplay = false;
    this.onClose.emit();
    this.onCloseAndBackToHome.emit('home');
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
    switch(this.schedullingPaymentType.value) {
      case 'Particular':
        this.advanceModalHeader = 'Adiantamento'
        this.advanceDescription = 'Para reservar o horário de atendimento, solicitamos o pagamento da seguinte taxa:';
      break

      case 'Convênio':
        this.advanceModalHeader = 'Aviso'
        this.advanceDescription = 'Antes de concluir o agendamento, por favor, leia o aviso abaixo.';
      break
    }
  }

  matchCitySelectedWithSchedullingFee(citySelected: string | undefined) {
    switch(citySelected) {
      case 'Paulista':
        this.advanceModalSchedullingFee = 'R$ 36';
        this.setAdvanceModalDescription();
        break;
      case 'Olinda':
        this.advanceModalSchedullingFee = 'R$ 52';
        this.setAdvanceModalDescription();
        break;
      case 'Recife':
        this.advanceModalSchedullingFee = 'R$ 72';
        this.setAdvanceModalDescription();
        break;
      case 'Boa Viagem':
        this.advanceModalSchedullingFee = 'R$ 72';
        this.setAdvanceModalDescription();
        break;
      case 'Abreu e Lima':
        this.advanceModalSchedullingFee = 'R$ 52';
        this.setAdvanceModalDescription();
        break;
      case 'Igarassu':
        this.advanceModalSchedullingFee = 'R$ 52';
        this.setAdvanceModalDescription();
        break;
      case 'Itapissuma':
        this.advanceModalSchedullingFee = 'R$ 72';
        this.setAdvanceModalDescription();
        break;

        default:
        this.advanceModalSchedullingFee = "";
        this.setAdvanceModalDescription();
    }
  }

  validateForm(formGroup: any) {
    if(formGroup.form.status == 'VALID') {
      this.saveFormData();
    }
  }

  saveFormData() {
    this.dataService.saveAllFormData(this.formDataToSave).subscribe({
      next: (response) => {
        console.log('POST Successfull ', response);
      },

      error: (error) => {
        console.log('Error Ocurred ', error);
      },

      complete: () => {
        console.log('Request complete');
      },
    })
  }

  //TODO: Definir o button do advance payment modal como submit para ser habilitado apenas ao ter uma forma de pagamento selecionada e o checkbox marcado.
  //TODO: Ajustar verificação de formulário no botão para habilitar corretamente quando formulário for validado.
}