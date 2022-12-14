import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsHomeComponent } from './groups-home/groups-home.component';

const routes: Routes = [
  { path: '', component: GroupsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
