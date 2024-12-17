import { Component, Input, EventEmitter, Output, OnInit, OnChanges } from '@angular/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { EmailDTO } from 'src/app/models/dto/dtos';
import { city, Payment } from 'src/app/models/form';
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
  @Input() chosenSchedullingCity: city;
  @Input() advanceModalSchedullingFee: string = "";
  @Input() schedullingPaymentType: Payment;
  @Input() formDataToSave: any;
  
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

  loginInputFieldValue: string;
  recoveryFieldCodeValue: string;

  displayRecoveryPasswordInput: boolean = false;

  advanceDescription: string = "";

  alertIcon = faExclamation;

  advanceModalHeader: string;

  checked: boolean = false;
  
  emailObject: EmailDTO;
  
  scheduleCode: string = Math.floor(Math.random() * 1000000).toString();

  ngOnInit(): void {
    this.schedullingPaymentType = {value: "PIX"};

    this.setAdvanceModalDescription();
    this.getAndSetPaymentOptions();
  }

  ngOnChanges(): void {
    if(this.advanceModaldisplay) {
      this.matchCitySelectedWithSchedullingFee(this.chosenSchedullingCity.city);
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
    this.onCloseAdvanceModal.emit();
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
    switch(this.formDataToSave.paymentType) {
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
        this.dataService.getSchedullingFee(citySelected).subscribe((obs: any) => {
          if(obs != null) {
            this.advanceModalSchedullingFee = `R$ ${obs}`;
          }
          else {
            this.advanceModalSchedullingFee = "";
          }
        })
        this.setAdvanceModalDescription();
    }

  validateForm(formGroup: any) {
    
    if(formGroup.form.status == 'VALID') {
      this.emailObject = {
        to: "dCaioCesar98@gmail.com",
        subject: "Nova Programação Agendada",
        text: `Uma nova consulta foi agendada. O código da consulta é: ${this.formDataToSave.attendanceCode}`
      }
      
      this.setScheduleCodeToShowAndSaveInFormData();
      this.dataService.sendEmailMessage(this.emailObject).subscribe();
      this.saveFormData();
      }

    }
  

  saveFormData() {
    this.dataService.saveAllFormData(this.formDataToSave).subscribe({
      next: (response) => {
        console.log('POST Successfull ', response);
        this.onConfirmAdvanceModal.emit(true);
      },

      error: (error) => {
        console.log('Error Ocurred ', error);
      },

      complete: () => {
        console.log('Request complete');
      },
    })
  }

  setScheduleCodeToShowAndSaveInFormData() {
    const scheduleCodeGenerated = Math.floor(Math.random() * 1000000).toString();
    this.scheduleCode = scheduleCodeGenerated;
    this.formDataToSave.attendanceCode = scheduleCodeGenerated;
  }

}