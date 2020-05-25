import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapaComponent } from './papa.component';

describe('PapaComponent', () => {
  let component: PapaComponent;
  let fixture: ComponentFixture<PapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
