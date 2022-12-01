import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketCountryComponent } from './bracket-country.component';

describe('BracketCountryComponent', () => {
  let component: BracketCountryComponent;
  let fixture: ComponentFixture<BracketCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
