import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BracketRoutingModule } from './bracket-routing.module';
import { BracketHomeComponent } from './bracket-home/bracket-home.component';
import { SharedModule } from '../shared/shared.module';
import { BracketMatchComponent } from './bracket-match/bracket-match.component';
import { BracketStageComponent } from './bracket-stage/bracket-stage.component';
import { BracketSideComponent } from './bracket-side/bracket-side.component';


@NgModule({
  declarations: [BracketHomeComponent, BracketMatchComponent, BracketStageComponent, BracketSideComponent],
  imports: [
    CommonModule,
    BracketRoutingModule,
    SharedModule
  ],
  exports: [BracketHomeComponent, BracketMatchComponent, BracketStageComponent, BracketSideComponent]
})
export class BracketModule { }
