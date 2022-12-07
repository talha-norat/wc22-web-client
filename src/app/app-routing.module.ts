import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
  { path: 'groups', loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
