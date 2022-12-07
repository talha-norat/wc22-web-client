import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { TeamFlagComponent } from './team-flag/team-flag.component';
import { TeamDialogComponent } from './team-dialog/team-dialog.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    TeamFlagComponent,
    TeamDialogComponent,
    FooterComponent
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
    FooterComponent
  ]
})
export class SharedModule { }
