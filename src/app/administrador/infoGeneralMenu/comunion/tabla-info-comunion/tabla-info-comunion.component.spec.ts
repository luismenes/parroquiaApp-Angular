import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInfoComunionComponent } from './tabla-info-comunion.component';

describe('TablaInfoComunionComponent', () => {
  let component: TablaInfoComunionComponent;
  let fixture: ComponentFixture<TablaInfoComunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaInfoComunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInfoComunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
