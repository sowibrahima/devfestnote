import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceInfosPage } from './device-infos.page';

describe('DeviceInfosPage', () => {
  let component: DeviceInfosPage;
  let fixture: ComponentFixture<DeviceInfosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceInfosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceInfosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
