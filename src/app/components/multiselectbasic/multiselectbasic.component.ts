import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-multiselectbasic',
  templateUrl: './multiselectbasic.component.html',
  styleUrls: ['./multiselectbasic.component.scss']
})
export class MultiselectbasicComponent implements OnInit {

    cities: City[];

    selectedCities: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}