import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcchiPage } from './ecchi.page';

describe('EcchiPage', () => {
  let component: EcchiPage;
  let fixture: ComponentFixture<EcchiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcchiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcchiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
