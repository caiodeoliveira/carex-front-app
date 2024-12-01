export interface Hour {
        value: string;
};

export interface Gender {
        value: string;
};

export interface PaymentType {
        value: string;
      }

export interface Payment {
        value: string;
      }
      
export interface Location {
        location: string;
        code: string;
}

export interface Insurance {
        insurance: string;
}
export interface city {
        city: string;
}

export interface FormSchedullingData {
        status: string,
        name: string,
        attendanceDate: string,
        attendanceHour: string,
        patientGender: string,
        patientPhoneNumber:string,
        paymentType:string,
        attendanceLocation:string,
        healthInsurance:string,
        attendanceCity:string,
        attendanceAddress:string,
        attendanceCode:string
}