import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { personalComponent } from './personal.component';

describe('personalComponent', () => {
  let component: personalComponent;
  let fixture: ComponentFixture<personalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [personalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(personalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
