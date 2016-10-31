/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApiariesComponent } from './apiaries.component';

describe('ApiariesComponent', () => {
  let component: ApiariesComponent;
  let fixture: ComponentFixture<ApiariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
