import { Component } from '@angular/core';

@Component({
  selector: 'app-terapies',
  templateUrl: './terapies.component.html',
  styleUrls: ['./terapies.component.scss']
})
export class TerapiesComponent {

  terapiesData: any = [
    {
      img: "../../../assets/dry_nedling_tp_small.png",
      altText: "imagem de uma acupuntura",
    },
    {
      img: "../../../assets/ear_acupunture_tp_small.png",
      altText: "imagem de uma dry nedle terapia",
    },
    {
      img: "../../../assets/myofacial_release_tp_small.png",
      altText: "imagem de uma terapia myofacial",
    },
    {
      img: "../../../assets/suction_cup_tp_small.png",
      altText: "imagem de uma ventosaterapia",
    },
  ];


}
