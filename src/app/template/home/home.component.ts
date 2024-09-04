import { Component, OnChanges, OnInit } from '@angular/core';
import { global } from 'src/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, OnInit{

  value: number;
  description: string = global.professionalDescription;

  ngOnInit(): void {
    this.value = 1;
  }

  ngOnChanges() {
    this.value;
  }

  incrementValue(): void {
    this.value ++;
  }

}
