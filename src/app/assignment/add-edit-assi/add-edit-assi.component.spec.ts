import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAssiComponent } from './add-edit-assi.component';

describe('AddEditAssiComponent', () => {
  let component: AddEditAssiComponent;
  let fixture: ComponentFixture<AddEditAssiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAssiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAssiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
