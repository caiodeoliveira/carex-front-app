import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, OnInit{

  value: number;

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
