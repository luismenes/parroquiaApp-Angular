import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInfoComunionComponent } from './editar-info-comunion.component';

describe('EditarInfoComunionComponent', () => {
  let component: EditarInfoComunionComponent;
  let fixture: ComponentFixture<EditarInfoComunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInfoComunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInfoComunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
