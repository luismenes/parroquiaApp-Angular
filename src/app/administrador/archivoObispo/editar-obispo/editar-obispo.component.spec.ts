import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarObispoComponent } from './editar-obispo.component';

describe('EditarObispoComponent', () => {
  let component: EditarObispoComponent;
  let fixture: ComponentFixture<EditarObispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarObispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarObispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
