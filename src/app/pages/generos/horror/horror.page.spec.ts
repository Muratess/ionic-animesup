import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorPage } from './horror.page';

describe('HorrorPage', () => {
  let component: HorrorPage;
  let fixture: ComponentFixture<HorrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorrorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
