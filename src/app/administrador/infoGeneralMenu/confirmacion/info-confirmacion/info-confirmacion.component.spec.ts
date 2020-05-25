import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConfirmacionComponent } from './info-confirmacion.component';

describe('InfoConfirmacionComponent', () => {
  let component: InfoConfirmacionComponent;
  let fixture: ComponentFixture<InfoConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
