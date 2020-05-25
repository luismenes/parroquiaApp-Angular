import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoInfoBautismoComponent } from './nuevo-info-bautismo.component';

describe('NuevoInfoBautismoComponent', () => {
  let component: NuevoInfoBautismoComponent;
  let fixture: ComponentFixture<NuevoInfoBautismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoInfoBautismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoInfoBautismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
