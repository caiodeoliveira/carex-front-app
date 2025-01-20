import { Component, EventEmitter, Input, Output } from '@angular/core';
import {global} from '../../../global';
import { PrimeNGConfig } from 'primeng/api';
import { Hour, Gender, Location, Insurance, city, PaymentType, FormSchedullingData } from 'src/app/models/form';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent {

  constructor(private primengConfig: PrimeNGConfig, private dataService: DataService) {}

  @Output() onClickBack: EventEmitter<boolean> = new EventEmitter();
  @Output() onFinishSchedule: EventEmitter<boolean> = new EventEmitter();
  @Output() onCloseAndBackHome: EventEmitter<string> = new EventEmitter();
  
  @Input() breakpoint: string;
  

  headerOne: string = global.terapies.headers.alternativeTerapies;
  headerTwo: string = global.terapies.headers.physioteraphyTerapies;

  closeEvent: EventEmitter<any> = new EventEmitter();

  nameInputValue: string;
  cpfInputValue: string;
  phoneInputValue: string;
  addressInputValue: string;

  attendanceDate: Date|undefined;

  unavailableDates: any[] = [];

  availableHours: Hour[] = [];
  selectedHour: Hour;
  
  genderList: Gender[] = [];
  selectedGender: Gender;

  paymentTypeList: PaymentType[] = [];
  paymentTypeSelected: PaymentType;

  attendanceLocationList: Location[] = [];
  attendanceLocationSelected: Location | undefined;

  insuranceList: Insurance[] = [];
  insuranceSelected: Insurance | undefined;

  attendanceCityList: city[] = [];
  attendanceCitySelected: city;
  
  displayAdvanceModal: boolean = false;
  displaySuccessScheduleModal: boolean = false;
  
  citiesList: string[];

  schedullingFee: string;

  pt: any;

  isInsuranceAsPayment: boolean;

  isMyLocationSelected: boolean = false;

  attendanceIsChosen: boolean = false;

  formData: FormSchedullingData;

  ngOnInit() {
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

    setTimeout(() => {
      this.getUnavailableDates();
    }, 200)

    this.attendanceCitySelected = {city: "Recife"};
  }

  getProfessionalData() {
    let response: any;
    this.dataService.getProfessionalData().subscribe(observer => {
      response = observer;
      console.log('Professional Data -> ', response);
    })
  }

  getUnavailableDates() {
    this.dataService.getAllUnavailableDates().subscribe(obs => {

      obs.forEach((obj:any) => {
        this.unavailableDates.push(new Date(obj.date))
      })
      
    })
    this.availableHours = [];
  }

  getAndSetAvailableHoursOptions() {
    this.dataService.getAllAvailableHoursByDate(this.attendanceDate).subscribe(obs => {

      obs.forEach((obj: any) => {
      const hasDuplicatedHour = this.availableHours.some((hourObj) => hourObj.value ==  obj.hour)
        
        if(!hasDuplicatedHour) {
          this.availableHours.push({value: obj.hour});
          this.availableHours.sort((hourA, hourB) => {
            return hourA.value.localeCompare(hourB.value);
          })
        }
      })

    })
  }

  getAndSetGenderOptions() {
    this.dataService.getAllGenderOptions().subscribe((obs: string[]) => {
      this.genderList = [];

      obs.forEach((genderOption) => {
        this.genderList.push({value: genderOption});
      })
    })
  }

  getAndSetPaymentTypeOptions() {
    this.dataService.getAllPaymentTypeOptions().subscribe((obs: string[]) => {
      this.paymentTypeList = [];

      obs.forEach((paymentOption) => {
        this.paymentTypeList.push({value: paymentOption})
      })
    })
  }

  getAndSetAttendanceCityOptions() {
    this.dataService.getAllAttendanceCityOptions().subscribe((obs: string[]) => {
      this.attendanceCityList = [];

      obs.forEach((attendanceCityOption) => {
        this.attendanceCityList.push({city: attendanceCityOption})
      })
    })

  }

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
    this.displayAdvanceModal = false;
  }

  closeAdvanceModal() {
    this.displayAdvanceModal = false
  }

  goToSchedullingLastStep(formGroup: any) {

    this.validateForm(formGroup);

    if(formGroup.form.value.city) {
      this.attendanceCitySelected = {city: formGroup.form.value.city.city};
    }
      this.displayAdvanceModal = true;

  }

  onChangePaymentType(event: { value: string; }) {

    Object.values(event.value).forEach((value => {
      this.toggleMyAddressLocationOption(value);
    }))

    if(this.paymentTypeSelected.value == 'Convênio') {
      this.isInsuranceAsPayment = true;
      this.attendanceLocationSelected = undefined;
      this.addressInputValue = '';
      this.attendanceCitySelected.city = "";
      this.isMyLocationSelected = false;
      this.attendanceCitySelected = {city: "nenhuma"};
    }
    if(this.paymentTypeSelected.value == 'Particular') {
      this.insuranceSelected = undefined;
      this.attendanceLocationSelected = undefined;
      this.isInsuranceAsPayment = false;
      this.attendanceCitySelected = {city: "Recife"};
    }

    this.checkIfHasToGetInsuranceOptions();

  }

  toggleMyAddressLocationOption(value: string) {
    if(value == 'Particular') {
      this.attendanceLocationList = [];
      this.attendanceLocationList.push({ location: 'Clínica AVP Fisioterapia Especializada (Recife-PE)', code: '1' });
      this.attendanceLocationList.push({ location: 'No endereço de minha preferência', code: '2' });
    }
    if(value == "Convênio") {
      this.attendanceLocationSelected = undefined;

      this.attendanceLocationList = [];
      
      this.attendanceLocationList.push({ location: 'Clínica AVP Fisioterapia Especializada (Recife-PE)', code: '1' });
    }
  }

  validateForm(formGroup: any) {
    let cityValueToPreventUndefined = "";
    let insuranceValueToPreventUndefined = "";
    
    if(formGroup.form.value.paymentType.value == 'Particular') {
      if(formGroup.form.value.city) {
            cityValueToPreventUndefined = formGroup.form.value.city.city;
      }
      else {
        cityValueToPreventUndefined = "Recife";
      }
    }
    else {
      cityValueToPreventUndefined = "";
    }
    formGroup.form.value.insurance ? insuranceValueToPreventUndefined = formGroup.form.value.insurance.insurance : insuranceValueToPreventUndefined = "";

      this.formData = {
        status: "A Confirmar",
        name: formGroup.form.value.name,
        attendanceDate: formGroup.form.value.date,
        attendanceHour: formGroup.form.value.hour.value,
        patientGender: this.selectedGender.value,
        patientPhoneNumber: formGroup.form.value.phone,
        paymentType: this.paymentTypeSelected.value,
        attendanceLocation: formGroup.form.value.location.location,
        healthInsurance: insuranceValueToPreventUndefined,
        attendanceCity: cityValueToPreventUndefined,
        attendanceAddress: formGroup.form.value.address,
        attendanceCode: "",
      }

      this.displayAdvanceModal = true;
      this.resetFormFieldsValue();
  }

  changeAttendanceLocation() {
    if(this.attendanceLocationSelected?.location == 'No endereço de minha preferência') {
      this.isMyLocationSelected = true;
    }
    else {
      this.isMyLocationSelected = false;
    }
  }

  closeSucessModalAndBackHome(event: string) {
    this.onCloseAndBackHome.emit(event);
  }

  activateAttendanceHourField() {
    this.attendanceIsChosen = true;
  }

  checkIfHasToGetInsuranceOptions() {
    if(this.paymentTypeSelected.value == 'Convênio') {
      this.getInsuranceOptions();
    }
  }

  getInsuranceOptions() {
    this.dataService.getAllInsuranceOptions().subscribe((obs: any[]) => {
      obs.forEach(insuranceObj => {
        this.insuranceList.push({insurance: insuranceObj.name})
      })
    })
  }

  resetFormFieldsValue() {
    this.nameInputValue = "";
    this.attendanceDate = undefined;
    this.selectedHour.value = "";
    this.selectedGender.value = "";
    this.phoneInputValue = "";
    this.paymentTypeSelected.value = "";
  }

}
