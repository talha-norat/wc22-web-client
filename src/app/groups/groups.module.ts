import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { SharedModule } from '../shared/shared.module';
import { GroupTeamRowComponent } from './group-team-row/group-team-row.component';
import { GroupComponent } from './group/group.component';


@NgModule({
  declarations: [GroupsHomeComponent, GroupTeamRowComponent, GroupComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule
  ]
})
export class GroupsModule { }
