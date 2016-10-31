import { Component, OnInit } from '@angular/core';
import {Apiary} from "../apiary";
import {ApiaryService} from "../apiary.service";

@Component({
  selector: 'apiary-table',
  templateUrl: './apiary-table.component.html',
  styleUrls: ['./apiary-table.component.css']
})
export class ApiaryTableComponent implements OnInit {

  apiaries: Apiary[] = [];


  constructor(private apiaryService: ApiaryService) { }

  ngOnInit() {

    this.apiaries = this.apiaryService.getApiaries();

  }

}
