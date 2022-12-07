import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsHomeComponent } from './teams-home/teams-home.component';
import { SharedModule } from '../shared/shared.module';
import { TeamCardComponent } from './team-card/team-card.component';


@NgModule({
  declarations: [TeamsHomeComponent, TeamCardComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule,
  ]
})
export class TeamsModule { }
