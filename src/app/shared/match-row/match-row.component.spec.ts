import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchRowComponent } from './match-row.component';

describe('MatchRowComponent', () => {
  let component: MatchRowComponent;
  let fixture: ComponentFixture<MatchRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
