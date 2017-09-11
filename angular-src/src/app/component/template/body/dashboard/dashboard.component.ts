import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private myConfigDate: IMyDpOptions = {
    dateFormat: 'dd-mm-yyyy'
  };

  private myCOnfigMonth: IMyDpOptions = {
    dateFormat: 'mm-yyyy'
  };

  constructor() { }

  ngOnInit() {
  }

}
