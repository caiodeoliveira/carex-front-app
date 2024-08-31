import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-programmings',
  templateUrl: './programmings.component.html',
  styleUrls: ['./programmings.component.scss']
})
export class ProgrammingsComponent {

  @Input() tableDataHeaders: string[];
  @Input() tableDataBody: any[];


}
