import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixResHomeComponent } from './fix-res-home/fix-res-home.component';

const routes: Routes = [
  { path: '', component: FixResHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixResRoutingModule { }
