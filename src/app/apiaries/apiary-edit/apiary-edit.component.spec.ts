/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApiaryEditComponent } from './apiary-edit.component';

describe('ApiaryEditComponent', () => {
  let component: ApiaryEditComponent;
  let fixture: ComponentFixture<ApiaryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiaryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
