import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGroup } from 'src/app/core/models/group.interface';
import { ITeam } from 'src/app/core/models/team.interface';
import { AppTeamsService } from 'src/app/core/services/app-teams-service.service';
import { NavbarService } from 'src/app/navbar/navbar.service';

@Component({
  selector: 'app-groups-home',
  templateUrl: './groups-home.component.html',
  styleUrls: ['./groups-home.component.css']
})
export class GroupsHomeComponent implements OnInit {

  fullWidth = false;
  groups: IGroup[] = [];

  constructor(private service: AppTeamsService,
    private router: Router,
    private navbarService: NavbarService) { }

  async ngOnInit(): Promise<void> {
    this.navbarService.setActive(this.router.url.replace('/', ''));
    await this.service.groups.subscribe((res) => {
      this.groups = res ?? [];
      this.groups.forEach(g => g.teams.sort((a, b) => {
        return this.sortOnProperty(a, b, ['group_points', 'goal_differential', 'goals_for', 'goals_against'], 0);
      }));
      // console.log(this.groups);
    });
  }

  sortOnProperty(a: ITeam, b: ITeam, properties: string[], index: number): number {
    // console.log(a.country, b.country, properties[index], index, a[properties[index]], b[properties[index]]);
    if (properties.length > 0) {
      if (a[properties[index]] === b[properties[index]]) {
        if (index === properties.length - 1) {
          return 0;
        }
        // console.log('EQUAL', a.country, b.country, properties[index], a[properties[index]], b[properties[index]]);
        this.sortOnProperty(a, b, properties, ++index);
      }

      if (a[properties[index]] > b[properties[index]]) {
        // console.log('A>B', a.country, b.country, properties[index], a[properties[index]], b[properties[index]]);
        return -1;
      }

      // console.log('A<B', a.country, b.country, properties[index], a[properties[index]], b[properties[index]]);
      return 1;
    }
    return 0;
  }

}
