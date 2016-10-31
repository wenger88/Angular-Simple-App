import { Component, OnInit } from '@angular/core';
import {ApiaryService} from "../apiary.service";
import {Subscription} from "rxjs";
import {Apiary} from "../apiary";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-apiary-detail',
  templateUrl: './apiary-detail.component.html',
  styleUrls: ['./apiary-detail.component.css']
})
export class ApiaryDetailComponent implements OnInit {

  selectedApiary: Apiary;

  private subscription: Subscription;
  private apiaryId: number;

  constructor(private apiaryService: ApiaryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.apiaryId = params['id'];
        this.selectedApiary = this.apiaryService.getApiary(this.apiaryId);
      }
    );

  }





}
