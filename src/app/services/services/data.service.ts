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
}
