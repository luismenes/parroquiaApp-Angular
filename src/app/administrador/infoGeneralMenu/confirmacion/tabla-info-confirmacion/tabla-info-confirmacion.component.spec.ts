import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInfoConfirmacionComponent } from './tabla-info-confirmacion.component';

describe('TablaInfoConfirmacionComponent', () => {
  let component: TablaInfoConfirmacionComponent;
  let fixture: ComponentFixture<TablaInfoConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaInfoConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInfoConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
