import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMatrimonioComponent } from './info-matrimonio.component';

describe('InfoMatrimonioComponent', () => {
  let component: InfoMatrimonioComponent;
  let fixture: ComponentFixture<InfoMatrimonioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMatrimonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
