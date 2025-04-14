import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RescheduleProgrammingDTO } from '../models/dto/dtos';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Terapies endpoints:

  getAllTerapies(): Observable<any> {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080/terapy/allTerapies`)
  }

  getAllTerapiesWithImagesBySize(size: string): Observable<any> {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080/terapy/allterapiesdata/${size}`)
  }


  getAllTerapyNames(): Observable<any> {
    return this.httpClient.get('http://ec2-34-238-245-105.compute-1.amazonaws.com:8080/terapy/names')
  }

  getAllTerapyDescriptions(): Observable<any> {
    return this.httpClient.get('http://ec2-34-238-245-105.compute-1.amazonaws.com:8080/terapy/descriptions')
  }

  // ProfessionalSchedule:

  getProfessionalData(): Observable<any> {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080professionalschedule/allschedules`);
  }

  getAllUnavailableDates(): Observable<any> {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080professionalschedule/date`)
  }

  getAllAvailableHoursByDate(date: Date | undefined): Observable<any> {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080professionalschedule/hour/${date}`)
  }

  // Insurance

  getAllInsuranceOptions(): Observable<any> {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080insurance/allinsurances`)
  }

  // Schedulling

  getAllGenderOptions(): Observable<any> {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080schedulling/allgenders`)
  }

  getAllPaymentTypeOptions(): Observable<any> {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080schedulling/allpaymenttypeoptions`)
  }
  
  getAllAttendanceCityOptions(): Observable<any> {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080schedulling/allattendancecityoptions`)
  }

  getAllPaymentOptions(): Observable<any> {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080schedulling/allpaymentoptions`)
  }

  getSchedullingFee(city: String | undefined) {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080schedulling/getschedullingfee/${city}`)
  }

  // Programming

  saveAllFormData(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<any>('http://ec2-34-238-245-105.compute-1.amazonaws.com:8080programming/saveformdata', formData, { headers });
  }

  getAllProgrammings() {
    return this.httpClient.get(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080programming/allprogrammings`)
  }

  getProgrammingByCode(code: any): Observable<string> {
    return this.httpClient.get<string>(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080programming/programmingbycode`, {params: { code } })
  }

  rescheduleProgramming(programmingId: number , dataObj: RescheduleProgrammingDTO): Observable<any> {
    return this.httpClient.patch<any>(`http://ec2-34-238-245-105.compute-1.amazonaws.com:8080programming/reschedule/${programmingId}`, dataObj);
  }

  sendEmailMessage(emailObj: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<any>('http://ec2-34-238-245-105.compute-1.amazonaws.com:8080email/send', emailObj, { headers });
  }
}
