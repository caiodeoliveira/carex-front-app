import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-programmings',
  templateUrl: './programmings.component.html',
  styleUrls: ['./programmings.component.scss']
})
export class ProgrammingsComponent implements OnInit {

  constructor(private dataService: DataService) {}

  tableDataBody: any[] = [];


  ngOnInit() {
    this.getAllProgrammingsData();
  }

  getAllProgrammingsData() {
    this.dataService.getAllProgrammings().subscribe((obs: any) => {
      obs.forEach((programmingObj: any) => {
        if(!programmingObj.attendanceCity) {
          programmingObj.attendanceCity = "Recife";
        } 
        programmingObj.attendanceAddress ? programmingObj.attendanceAddress : programmingObj.attendanceAddress = "Rua Djalma Farias, 251, Torreão, Recife - PE";
        this.tableDataBody.push(programmingObj);
      })
    })
  }
}
