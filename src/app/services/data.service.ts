import { HttpClient } from '@angular/common/http';
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

  

}
