import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixResRoutingModule } from './fix-res-routing.module';
import { FixResHomeComponent } from './fix-res-home/fix-res-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FixResHomeComponent],
  imports: [
    CommonModule,
    FixResRoutingModule,
    SharedModule
  ]
})
export class FixResModule { }
