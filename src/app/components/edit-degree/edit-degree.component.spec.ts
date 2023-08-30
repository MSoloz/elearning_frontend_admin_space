import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDegreeComponent } from './edit-degree.component';

describe('EditDegreeComponent', () => {
  let component: EditDegreeComponent;
  let fixture: ComponentFixture<EditDegreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDegreeComponent]
    });
    fixture = TestBed.createComponent(EditDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
