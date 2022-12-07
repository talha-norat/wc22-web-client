import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BracketHomeComponent } from './bracket-home/bracket-home.component';

const routes: Routes = [
  { path: '', component: BracketHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BracketRoutingModule { }
