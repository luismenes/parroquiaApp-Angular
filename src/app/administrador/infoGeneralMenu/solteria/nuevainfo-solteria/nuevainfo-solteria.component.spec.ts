import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevainfoSolteriaComponent } from './nuevainfo-solteria.component';

describe('NuevainfoSolteriaComponent', () => {
  let component: NuevainfoSolteriaComponent;
  let fixture: ComponentFixture<NuevainfoSolteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevainfoSolteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevainfoSolteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
