import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCalculationComponent } from './simple-calculation.component';

describe('SimpleCalculationComponent', () => {
  let component: SimpleCalculationComponent;
  let fixture: ComponentFixture<SimpleCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
