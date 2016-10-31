import {Component, OnInit, Input} from '@angular/core';
import {Apiary} from "../../apiary";
import {ApiaryService} from "../../apiary.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: '[apiary-item]',
  templateUrl: './apiary-item.component.html',
  styleUrls: ['./apiary-item.component.css']
})
export class ApiaryItemComponent implements OnInit {


  @Input() apiary: Apiary;
  @Input() apiaryId: number;


  constructor(private router: Router, private apiaryService: ApiaryService) { }


  ngOnInit() {


  }

  onEdit(){
    this.router.navigate(['/apiaries', this.apiaryId, 'edit']);
  }

  onDelete(){
    this.apiaryService.deleteApiary(this.apiaryId);
  }

}
