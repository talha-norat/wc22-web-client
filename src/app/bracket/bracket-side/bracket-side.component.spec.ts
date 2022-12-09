import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketSideComponent } from './bracket-side.component';

describe('BracketSideComponent', () => {
  let component: BracketSideComponent;
  let fixture: ComponentFixture<BracketSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
