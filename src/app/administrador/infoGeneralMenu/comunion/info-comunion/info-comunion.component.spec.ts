import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComunionComponent } from './info-comunion.component';

describe('InfoComunionComponent', () => {
  let component: InfoComunionComponent;
  let fixture: ComponentFixture<InfoComunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoComunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
