import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPapaComponent } from './nuevo-papa.component';

describe('NuevoPapaComponent', () => {
  let component: NuevoPapaComponent;
  let fixture: ComponentFixture<NuevoPapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
