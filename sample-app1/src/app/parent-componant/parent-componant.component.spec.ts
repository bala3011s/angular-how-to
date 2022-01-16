import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponantComponent } from './parent-componant.component';

describe('ParentComponantComponent', () => {
  let component: ParentComponantComponent;
  let fixture: ComponentFixture<ParentComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
