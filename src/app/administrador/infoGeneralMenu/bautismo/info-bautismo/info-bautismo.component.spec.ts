import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBautismoComponent } from './info-bautismo.component';

describe('InfoBautismoComponent', () => {
  let component: InfoBautismoComponent;
  let fixture: ComponentFixture<InfoBautismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBautismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBautismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
