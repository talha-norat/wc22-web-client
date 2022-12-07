import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BracketRoutingModule } from './bracket-routing.module';
import { BracketHomeComponent } from './bracket-home/bracket-home.component';


@NgModule({
  declarations: [BracketHomeComponent],
  imports: [
    CommonModule,
    BracketRoutingModule
  ]
})
export class BracketModule { }
