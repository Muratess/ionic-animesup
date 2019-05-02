import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosPage } from './generos.page';

describe('GenerosPage', () => {
  let component: GenerosPage;
  let fixture: ComponentFixture<GenerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
