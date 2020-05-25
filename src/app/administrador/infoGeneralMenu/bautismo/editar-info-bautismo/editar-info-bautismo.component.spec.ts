import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInfoBautismoComponent } from './editar-info-bautismo.component';

describe('EditarInfoBautismoComponent', () => {
  let component: EditarInfoBautismoComponent;
  let fixture: ComponentFixture<EditarInfoBautismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInfoBautismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInfoBautismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
