import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevainfoMatrimonioComponent } from './nuevainfo-matrimonio.component';

describe('NuevainfoMatrimonioComponent', () => {
  let component: NuevainfoMatrimonioComponent;
  let fixture: ComponentFixture<NuevainfoMatrimonioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevainfoMatrimonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevainfoMatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
