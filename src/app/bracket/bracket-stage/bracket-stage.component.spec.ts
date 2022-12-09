import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketStageComponent } from './bracket-stage.component';

describe('BracketStageComponent', () => {
  let component: BracketStageComponent;
  let fixture: ComponentFixture<BracketStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
