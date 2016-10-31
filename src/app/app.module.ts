import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApiariesComponent } from './apiaries/apiaries.component';
import { ApiaryTableComponent } from './apiaries/apiary-table/apiary-table.component';
import { ApiaryItemComponent } from './apiaries/apiary-table/apiary-item/apiary-item.component';
import { ApiaryDetailComponent } from './apiaries/apiary-detail/apiary-detail.component';
import { ApiaryEditComponent } from './apiaries/apiary-edit/apiary-edit.component';
import {ApiaryService} from "./apiaries/apiary.service";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApiariesComponent,
    ApiaryTableComponent,
    ApiaryItemComponent,
    ApiaryDetailComponent,
    ApiaryEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', redirectTo:'/apiaries', pathMatch: 'full'},
      {path: 'apiaries', component: ApiariesComponent, children: [
        {path: '', component: ApiaryTableComponent},
        {path: 'new', component: ApiaryEditComponent},
        {path: ':id', component: ApiaryDetailComponent},
        {path: ':id/edit', component: ApiaryEditComponent}
      ]}
    ])
  ],
  providers: [ApiaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
