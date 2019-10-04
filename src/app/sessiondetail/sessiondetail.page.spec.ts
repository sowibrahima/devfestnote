import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessiondetailPage } from './sessiondetail.page';

describe('SessiondetailPage', () => {
  let component: SessiondetailPage;
  let fixture: ComponentFixture<SessiondetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessiondetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessiondetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
