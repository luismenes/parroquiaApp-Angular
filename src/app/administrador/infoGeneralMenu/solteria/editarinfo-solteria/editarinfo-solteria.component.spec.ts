import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarinfoSolteriaComponent } from './editarinfo-solteria.component';

describe('EditarinfoSolteriaComponent', () => {
  let component: EditarinfoSolteriaComponent;
  let fixture: ComponentFixture<EditarinfoSolteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarinfoSolteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarinfoSolteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
