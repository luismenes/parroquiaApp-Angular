import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarinfoMatrimonioComponent } from './editarinfo-matrimonio.component';

describe('EditarinfoMatrimonioComponent', () => {
  let component: EditarinfoMatrimonioComponent;
  let fixture: ComponentFixture<EditarinfoMatrimonioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarinfoMatrimonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarinfoMatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
