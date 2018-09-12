import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovacionDocenteComponent } from './innovacion-docente.component';

describe('InnovacionDocenteComponent', () => {
  let component: InnovacionDocenteComponent;
  let fixture: ComponentFixture<InnovacionDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovacionDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovacionDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
