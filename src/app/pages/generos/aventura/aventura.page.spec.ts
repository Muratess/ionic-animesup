import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AventuraPage } from './aventura.page';

describe('AventuraPage', () => {
  let component: AventuraPage;
  let fixture: ComponentFixture<AventuraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AventuraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AventuraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
