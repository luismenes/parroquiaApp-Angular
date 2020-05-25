import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInfoBautismoComponent } from './tabla-info-bautismo.component';

describe('TablaInfoBautismoComponent', () => {
  let component: TablaInfoBautismoComponent;
  let fixture: ComponentFixture<TablaInfoBautismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaInfoBautismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInfoBautismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
