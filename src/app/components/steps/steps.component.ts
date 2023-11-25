import {Component} from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'steps',
  templateUrl: 'steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class Steps {

  backIcon = faChevronLeft;
  nextIcon = faChevronRight

  constructor() {}
}