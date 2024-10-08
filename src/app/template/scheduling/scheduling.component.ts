import { Component, EventEmitter, Input, Output } from '@angular/core';
import {global} from '../../../global';
import { trigger, state, style, animate, transition } from '@angular/animations';


interface Hour {
  value: string;
  code: string;
}

interface Gender {
  gender: string;
  code: string;
}

interface Payment {
  type: string;
  code: string;
}

interface Location {
  location: string;
  code: string;
}

interface Insurance {
  insurance: string;
  code: string;
}

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
  animations: [
    trigger('easeDisplay', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('2.2s', style({
          opacity: 1
        })),
      ]),
    ]),
  ]
})
export class SchedulingComponent {

  @Input() isAPhysioTerapyType: boolean;

  @Output() onClickBack: EventEmitter<boolean> = new EventEmitter();
  @Output() onFinishSchedule: EventEmitter<boolean> = new EventEmitter();
  
  headerOne: string = global.terapies.headers.alternativeTerapies;
  headerTwo: string = global.terapies.headers.physioteraphyTerapies;

  closeEvent: EventEmitter<any> = new EventEmitter();

  nameInputValue: string;
  phoneInputValue: string;
  addressInputValue: string;

  availableHours: Hour[];
  selectedHour: Hour;
  
  genderList: Gender[];
  selectedGender: Gender;

  paymentType: Payment[];
  paymentTypeSelected: Payment;

  attendanceLocationList: Location[];
  attendaceLocationSelected: Location;

  insuranceList: Insurance[];
  InsuranceSelected: Insurance;
  
  displayAdvanceModal: boolean = false;
  displaySuccessScheduleModal: boolean = false;

  ngOnInit() {
    this.availableHours = [
      { value: '12:00', code: '1' },
      { value: '09:45', code: '2' },
      { value: '10:30', code: '3' },
      { value: '14:15', code: '4' },
      { value: '15:22', code: '5' },
      { value: '16:40', code: '6' },
      { value: '17:10', code: '7' }
  ];

    this.genderList = [
      { gender: 'Escolha uma opção', code: '1' },
      { gender: 'Masculino', code: '2' },
      { gender: 'Feminino', code: '3' },
      { gender: 'Prefiro não informar', code: '4' },
    ];

    this.paymentType = [
      { type: 'Escolha uma opção', code: '1' },
      { type: 'Convênio', code: '2' },
      { type: 'Particular', code: '3' },
    ];

    this.attendanceLocationList = [
      { location: 'Escolha uma opção', code: '1' },
      { location: 'Clínica Care, Rua Patrício Lisboa, número 400. Recife PE', code: '2' },
      { location: 'No endereço de minha preferência', code: '3' },
    ];

    this.insuranceList = [
      { insurance: 'Escolha uma opção', code: '1' },
      { insurance: 'Bradesco Top Nacional Quarto', code: '2' },
      { insurance: 'Sulamérica Nacional', code: '3' },
      { insurance: 'Unimed Regional', code: '4' },
      { insurance: 'Hapvida Express', code: '5' },
    ];
  }

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
      name: global.terapies.names.acupunture
    },
    {
      img: global.terapies.path.obstetricPhysioterapy,
      altText: "imagem de uma Fisioterapia Obstétrica",
      name: global.terapies.names.earAcupunture
    },
    {
      img: global.terapies.path.doulage,
      altText: "imagem de uma Doulagem",
      name: global.terapies.names.myofacialRelease
    },
  ]

  handleAdvanceModal($event: boolean) {
    this.displayAdvanceModal = false;
    this.closeEvent.emit(false);
    
    if($event) {
      this.showSuccessScheduleModal();
    }
  }
  
  showSuccessScheduleModal() {
    this.displaySuccessScheduleModal = true;
  }

  hideFinishScheduleModal() {
    this.displaySuccessScheduleModal = false;
  }

  onClickBackButton() {
    this.onClickBack.emit(false);
  }

  goToFinishSchedule() {
    this.displayAdvanceModal = true;
  }
  
}
