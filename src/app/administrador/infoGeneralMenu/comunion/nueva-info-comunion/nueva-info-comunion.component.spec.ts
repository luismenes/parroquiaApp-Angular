import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaInfoComunionComponent } from './nueva-info-comunion.component';

describe('NuevaInfoComunionComponent', () => {
  let component: NuevaInfoComunionComponent;
  let fixture: ComponentFixture<NuevaInfoComunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaInfoComunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaInfoComunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
