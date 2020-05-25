import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaInfoConfirmacionComponent } from './nueva-info-confirmacion.component';

describe('NuevaInfoConfirmacionComponent', () => {
  let component: NuevaInfoConfirmacionComponent;
  let fixture: ComponentFixture<NuevaInfoConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaInfoConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaInfoConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
