import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPapaComponent } from './tabla-papa.component';

describe('TablaPapaComponent', () => {
  let component: TablaPapaComponent;
  let fixture: ComponentFixture<TablaPapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
