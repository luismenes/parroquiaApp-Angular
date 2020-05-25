import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInfoMatrimonioComponent } from './tabla-info-matrimonio.component';

describe('TablaInfoMatrimonioComponent', () => {
  let component: TablaInfoMatrimonioComponent;
  let fixture: ComponentFixture<TablaInfoMatrimonioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaInfoMatrimonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInfoMatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
