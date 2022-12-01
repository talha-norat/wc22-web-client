import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BracketCountryComponent } from './bracket-country/bracket-country.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    BracketCountryComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    BracketCountryComponent
  ]
})
export class SharedModule { }
