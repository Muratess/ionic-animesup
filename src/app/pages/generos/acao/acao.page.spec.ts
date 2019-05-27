import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoPage } from './acao.page';

describe('AcaoPage', () => {
  let component: AcaoPage;
  let fixture: ComponentFixture<AcaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
