import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObispoComponent } from './obispo.component';

describe('ObispoComponent', () => {
  let component: ObispoComponent;
  let fixture: ComponentFixture<ObispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
