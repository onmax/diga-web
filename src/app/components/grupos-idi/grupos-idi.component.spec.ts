import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposIdiComponent } from './grupos-idi.component';

describe('GruposIdiComponent', () => {
  let component: GruposIdiComponent;
  let fixture: ComponentFixture<GruposIdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposIdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
