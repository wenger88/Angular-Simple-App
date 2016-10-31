/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApiaryItemComponent } from './apiary-item.component';

describe('ApiaryItemComponent', () => {
  let component: ApiaryItemComponent;
  let fixture: ComponentFixture<ApiaryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiaryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
