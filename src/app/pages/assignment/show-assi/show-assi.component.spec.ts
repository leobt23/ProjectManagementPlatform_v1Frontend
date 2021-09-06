import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssiComponent } from './show-assi.component';

describe('ShowAssiComponent', () => {
  let component: ShowAssiComponent;
  let fixture: ComponentFixture<ShowAssiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAssiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAssiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
