import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPapaComponent } from './editar-papa.component';

describe('EditarPapaComponent', () => {
  let component: EditarPapaComponent;
  let fixture: ComponentFixture<EditarPapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
