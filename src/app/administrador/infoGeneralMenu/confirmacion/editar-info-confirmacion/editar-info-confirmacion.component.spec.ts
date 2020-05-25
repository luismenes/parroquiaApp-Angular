import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInfoConfirmacionComponent } from './editar-info-confirmacion.component';

describe('EditarInfoConfirmacionComponent', () => {
  let component: EditarInfoConfirmacionComponent;
  let fixture: ComponentFixture<EditarInfoConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInfoConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInfoConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
