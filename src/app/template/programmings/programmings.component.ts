import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-programmings',
  templateUrl: './programmings.component.html',
  styleUrls: ['./programmings.component.scss']
})
export class ProgrammingsComponent implements OnInit{

  @Input() tableDataHeaders: string[];
  @Input() tableDataBody: any[];


  ngOnInit() {
  }
}
