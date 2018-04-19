import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroExmploComponent } from './primeiro-exmplo.component';

describe('PrimeiroExmploComponent', () => {
  let component: PrimeiroExmploComponent;
  let fixture: ComponentFixture<PrimeiroExmploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroExmploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroExmploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
