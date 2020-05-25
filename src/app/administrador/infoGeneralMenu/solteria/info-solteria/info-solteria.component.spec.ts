import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSolteriaComponent } from './info-solteria.component';

describe('InfoSolteriaComponent', () => {
  let component: InfoSolteriaComponent;
  let fixture: ComponentFixture<InfoSolteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSolteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSolteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
