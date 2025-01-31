import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RescheduleProgrammingDTO } from '../models/dto/dtos';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // TODO: Apontar o Host das URLs para o Render.

  getAllTerapies(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/terapy/allTerapies`)
  }

  getAllTerapiesWithImagesBySize(size: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/terapy/allterapiesdata/${size}`)
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

  getAllAvailableHoursByDate(date: Date | undefined): Observable<any> {
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

  getSchedullingFee(city: String | undefined) {
    return this.httpClient.get(`http://localhost:8080/schedulling/getschedullingfee/${city}`)
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

  getProgrammingByCode(code: any): Observable<string> {
    return this.httpClient.get<string>(`http://localhost:8080/programming/programmingbycode`, {params: { code } })
  }

  rescheduleProgramming(programmingId: number , dataObj: RescheduleProgrammingDTO): Observable<any> {
    return this.httpClient.patch<any>(`http://localhost:8080/programming/reschedule/${programmingId}`, dataObj);
  }

  sendEmailMessage(emailObj: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<any>('http://localhost:8080/email/send', emailObj, { headers });
  }
}
