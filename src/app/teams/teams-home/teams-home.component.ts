import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITeam } from 'src/app/core/models/team.interface';
import { AppTeamsService } from 'src/app/core/services/app-teams-service.service';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { getCountryImage } from 'src/environments/environment-base';

@Component({
  selector: 'app-teams-home',
  templateUrl: './teams-home.component.html',
  styleUrls: ['./teams-home.component.css']
})
export class TeamsHomeComponent implements OnInit {

  getCountryImage = getCountryImage;

  teams: ITeam[] = [];

  constructor(private service: AppTeamsService,
    private router: Router,
    private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.setActive(this.router.url.replace('/', ''));
    this.service.groups.subscribe((groups) => {
      groups.forEach((g) => {
        g.teams.forEach(t => {
          t.imgSrc = this.getCountryImage(t.country);
        });
        this.teams.push(...g.teams);
      })
      this.teams.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

}
