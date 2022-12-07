import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { TeamFlagComponent } from './team-flag/team-flag.component';
import { TeamDialogComponent } from './team-dialog/team-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { MatchRowComponent } from './match-row/match-row.component';

@NgModule({
  declarations: [
    TeamFlagComponent,
    TeamDialogComponent,
    FooterComponent,
    MatchRowComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,

    TeamFlagComponent,
    FooterComponent,
    MatchRowComponent,
    TeamDialogComponent
  ]
})
export class SharedModule { }
