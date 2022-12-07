import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketHomeComponent } from './bracket-home.component';

describe('BracketHomeComponent', () => {
  let component: BracketHomeComponent;
  let fixture: ComponentFixture<BracketHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
