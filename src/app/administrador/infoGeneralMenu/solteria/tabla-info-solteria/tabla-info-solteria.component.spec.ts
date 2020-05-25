import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInfoSolteriaComponent } from './tabla-info-solteria.component';

describe('TablaInfoSolteriaComponent', () => {
  let component: TablaInfoSolteriaComponent;
  let fixture: ComponentFixture<TablaInfoSolteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaInfoSolteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInfoSolteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
