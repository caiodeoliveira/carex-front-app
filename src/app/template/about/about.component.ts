import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { global } from 'src/global';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges{

  @Input() breakpoint: string;
  
  value: number;
  description: string = global.about.professionalDescription;

  professionalImageSize: string = "";

  ngOnInit(): void {
    this.value = 1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setProfessionalImageSize();
  }

  incrementValue(): void {
    this.value ++;
  }

  openWhatsApp() {
    const phoneNumber = '558186504846';
    const message = 'Olá, gostaria de mais informações.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  setProfessionalImageSize() {
    if(this.breakpoint.includes('mobile')) {
      this.professionalImageSize = "small"
    }
    if(this.breakpoint.includes('tablet')) {
      this.professionalImageSize = "regular"
    }
    if(this.breakpoint.includes('web')) {
      this.professionalImageSize = "big"
    }
  }
}
