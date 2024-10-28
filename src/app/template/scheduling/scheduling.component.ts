import { Component, EventEmitter, Input, Output } from '@angular/core';
import {global} from '../../../global';
import { PrimeNGConfig } from 'primeng/api';
import { Hour, Gender, Payment, Location, Insurance, city } from 'src/app/models/form';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent {

  constructor(private primengConfig: PrimeNGConfig) {}

  @Output() onClickBack: EventEmitter<boolean> = new EventEmitter();
  @Output() onFinishSchedule: EventEmitter<boolean> = new EventEmitter();
  
  headerOne: string = global.terapies.headers.alternativeTerapies;
  headerTwo: string = global.terapies.headers.physioteraphyTerapies;

  closeEvent: EventEmitter<any> = new EventEmitter();

  nameInputValue: string;
  phoneInputValue: string;
  addressInputValue: string;

  attendanceDate: Date;
  availableHours: Hour[];
  selectedHour: Hour;
  
  genderList: Gender[];
  selectedGender: Gender;

  paymentTypeList: Payment[];
  paymentTypeSelected: Payment;

  attendanceLocationList: Location[];
  attendanceLocationSelected: Location | undefined;

  insuranceList: Insurance[];
  InsuranceSelected: Insurance | undefined;

  attendanceCityList: city[];
  attendanceCitySelected: city | undefined;
  
  displayAdvanceModal: boolean = false;
  displaySuccessScheduleModal: boolean = false;
  
  schedullingCity: string | undefined;

  citiesList: string[];

  schedullingFee: string;

  pt: any;

  isInsuranceAsPayment: boolean;


  isMyLocationSelected: boolean = false;

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
      { gender: 'Masculino', code: '1' },
      { gender: 'Feminino', code: '2' },
      { gender: 'Prefiro não informar', code: '3' },
    ];

    this.paymentTypeList = [
      { type: 'Convênio', code: '1' },
      { type: 'Particular', code: '2' },
    ];

    this.insuranceList = [
      { insurance: 'Bradesco Top Nacional Quarto', code: '1' },
      { insurance: 'Sulamérica Nacional', code: '2' },
      { insurance: 'Unimed Regional', code: '3' },
      { insurance: 'Hapvida Express', code: '4' },
    ];

    this.attendanceLocationList = [
      { location: 'Clínica Care, Rua Patrício Lisboa, número 400. Recife PE', code: '1' },
    ];

    this.attendanceCityList = [
      { city: 'Paulista', code: '1' },
      { city: 'Olinda', code: '2' },
      { city: 'Recife', code: '3' },
      { city: 'Boa Viagem', code: '4' },
      { city: 'Abreu e Lima', code: '5' },
      { city: 'Igarassu', code: '6' },
      { city: 'Itapissuma', code: '7' },
    ]

    this.citiesList = [
      `${global.schedulling.cities.paulista}`,
      `${global.schedulling.cities.olinda}`,
      `${global.schedulling.cities.recife}`,
      `${global.schedulling.cities.abreuELima}`,
      `${global.schedulling.cities.igarassu}`,
      `${global.schedulling.cities.itapissuma}`,
    ]

    this.pt = {

      firstDayOfWeek: 0,
      dayNames: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
      dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
      dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
      monthNames: [ "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro" ],
      monthNamesShort: [ "jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez" ],
      today: 'Hoje',
      clear: 'Limpar'
    };

    this.primengConfig.setTranslation(this.pt);
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

  goToFinishSchedule(formGroup: any) {

    this.validateForm(formGroup);

    if(!typeof formGroup.form.value.city == undefined) {
      this.setAttendanceCity(formGroup.form.value.city.city);
    }

      this.displayAdvanceModal = true;
      this.schedullingCity = this.attendanceCitySelected?.city;

  }

  onChangePaymentType(event: { value: string; }) {

    Object.values(event.value).forEach((value => {
      this.toggleMyAddressLocationOption(value);
    }))

    if(this.paymentTypeSelected.type == 'Convênio') {
      this.isInsuranceAsPayment = true;
      this.attendanceLocationSelected = undefined;
      this.addressInputValue = '';
      this.attendanceCitySelected = undefined;

      this.isMyLocationSelected = false;
    }
    if(this.paymentTypeSelected.type == 'Particular') {
      this.InsuranceSelected = undefined;
      this.attendanceLocationSelected = undefined;

      this.isInsuranceAsPayment = false;
    }
  }

  toggleMyAddressLocationOption(value: string) {
    if(value == 'Particular') {
      this.attendanceLocationList.pop();
      this.attendanceLocationList.push({ location: 'No endereço de minha preferência', code: '1' });
    }
    if(value == "Convênio") {
      this.attendanceLocationSelected = undefined;
      this.attendanceLocationList.pop();
      this.attendanceLocationList.push({ location: 'Clínica Care, Rua Patrício Lisboa, número 400. Recife PE', code: '1' });
    }
  }

  validateForm(formGroup: any): boolean {
    if(formGroup.form.status == 'VALID') {
      return true;
    }
    else {
      return false;
    }
  }

  logForm(formGroup: any) {
    console.log('formGroup Stats -> ', formGroup.form)
  }

  changeAttendanceLocation() {
    if(this.attendanceLocationSelected?.location == 'No endereço de minha preferência')
    this.isMyLocationSelected = true;
  }

  setAttendanceCity(cityData: string) {
    this.schedullingCity = cityData;
    // console.log('cityData -> ', cityData);
  }

}
