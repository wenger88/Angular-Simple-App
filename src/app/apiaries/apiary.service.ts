import { Injectable } from '@angular/core';
import {Apiary} from "./apiary";
import {Hives} from "./hives";

@Injectable()
export class ApiaryService {

  private apiaries: Apiary[] = [
    new Apiary("Apiary 1", "small apiary", "Rankovce", [
      new Hives("Hive 1","Landstrut"),
      new Hives("Hive 2", "Dadenblat"),
      new Hives('Hive 3', "Landstrut")
    ]),
    new Apiary("Apiary 2", "large apiary", "Babunci", [
      new Hives("Hive 1","Landstrut"),
      new Hives("Hive 2", "Dadenblat"),
    ]),
    new Apiary("Apiary 3", "very small apiary", "Palanka", []),
  ];


  constructor() { }

  getApiaries(){
    return this.apiaries;
  }

  getApiary(id: number){
    return this.apiaries[id];
  }

  deleteApiary(id: number){
    //this.recipes.splice(this.recipes.indexOf(recipe), 1);
    this.apiaries.splice(id, 1)
  }


}
