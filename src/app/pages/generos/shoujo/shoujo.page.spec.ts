import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoujoPage } from './shoujo.page';

describe('ShoujoPage', () => {
  let component: ShoujoPage;
  let fixture: ComponentFixture<ShoujoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoujoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoujoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
