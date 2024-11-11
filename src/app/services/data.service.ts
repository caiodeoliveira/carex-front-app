import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAllTerapies(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/terapy/allTerapies')
  }

  getAllTerapyNames(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/terapy/names')
  }

  getAllTerapyDescriptions(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/terapy/descriptions')
  }

  // ProfessionalSchedule:

  getProfessionalData(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/professionalschedule/allschedules`);
  }

  getAllUnavailableDates(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/professionalschedule/date`)
  }

  getUnavailableHoursByDate(date: Date): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/professionalschedule/hour/${date}`)
  }

  // Insurance

  getAllInsuranceOptions(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/insurance/allinsurances`)
  }

  // Schedulling

  getAllGenderOptions(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/schedulling/allgenders`)
  }

  getAllPaymentTypeOptions(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/schedulling/allpaymenttypeoptions`)
  }
  
  getAllAttendanceCityOptions(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/schedulling/allattendancecityoptions`)
  }

  getAllPaymentOptions(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/schedulling/allpaymentoptions`)
  }

  // Programming

  saveAllFormData(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<any>('http://localhost:8080/programming/saveformdata', formData, { headers });
  }

  getAllProgrammings() {
    return this.httpClient.get(`http://localhost:8080/programming/allprogrammings`)
  }

}
