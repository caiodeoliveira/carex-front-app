import { Component, Input } from '@angular/core';
import { faChevronLeft, faChevronRight, faCheck, faTrash, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button-component.scss']
})
export class ButtonComponent {

@Input() buttonType: string;
@Input() buttonLabel: string;
@Input() undoActionButtonActive: boolean;
@Input() isSubmitButtonDisabled: boolean = false;


backIcon = faChevronLeft;
nextIcon = faChevronRight

confirmScheduleIcon = faCheck;
deleteScheduleIcon = faTrash;

undoActionButton = faRotateLeft;
}
