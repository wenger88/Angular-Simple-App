/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApiaryTableComponent } from './apiary-table.component';

describe('ApiaryTableComponent', () => {
  let component: ApiaryTableComponent;
  let fixture: ComponentFixture<ApiaryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiaryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
