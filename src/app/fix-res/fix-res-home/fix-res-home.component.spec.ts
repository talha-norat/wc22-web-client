import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixResHomeComponent } from './fix-res-home.component';

describe('FixResHomeComponent', () => {
  let component: FixResHomeComponent;
  let fixture: ComponentFixture<FixResHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixResHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixResHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
