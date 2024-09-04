import { Component, Input } from '@angular/core';
import { faChevronLeft, faChevronRight, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button-component.scss']
})
export class ButtonComponent {

@Input() buttonType: string;
@Input() buttonLabel: string;

backIcon = faChevronLeft;
nextIcon = faChevronRight

confirmScheduleIcon = faCheck;
deleteScheduleIcon = faTrash;

}
