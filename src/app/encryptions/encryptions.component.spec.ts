import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionsComponent } from './encryptions.component';

describe('EncryptionsComponent', () => {
  let component: EncryptionsComponent;
  let fixture: ComponentFixture<EncryptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncryptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
