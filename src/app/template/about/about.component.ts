import { Component, OnChanges, OnInit } from '@angular/core';
import { global } from 'src/global';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  value: number;
  description: string = global.about.professionalDescription;

  ngOnInit(): void {
    this.value = 1;
  }

  incrementValue(): void {
    this.value ++;
  }

  openWhatsApp() {
    const phoneNumber = '558186504846'; // Substitua pelo número desejado
    const message = 'Olá, gostaria de mais informações.'; // Mensagem opcional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
