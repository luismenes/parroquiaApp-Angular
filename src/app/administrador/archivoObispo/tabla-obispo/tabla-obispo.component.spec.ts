import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaObispoComponent } from './tabla-obispo.component';

describe('TablaObispoComponent', () => {
  let component: TablaObispoComponent;
  let fixture: ComponentFixture<TablaObispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaObispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaObispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
