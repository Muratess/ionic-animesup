import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopanimesPage } from './topanimes.page';

describe('TopanimesPage', () => {
  let component: TopanimesPage;
  let fixture: ComponentFixture<TopanimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopanimesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopanimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
