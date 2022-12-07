import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTeamRowComponent } from './group-team-row.component';

describe('GroupTeamRowComponent', () => {
  let component: GroupTeamRowComponent;
  let fixture: ComponentFixture<GroupTeamRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTeamRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTeamRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
