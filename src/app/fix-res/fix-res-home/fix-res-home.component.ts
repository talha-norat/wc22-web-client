import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMatch } from 'src/app/core/models/match.interface';
import { AppTeamsService } from 'src/app/core/services/app-teams-service.service';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { getCountryImage } from 'src/environments/environment-base';

@Component({
  selector: 'app-fix-res-home',
  templateUrl: './fix-res-home.component.html',
  styleUrls: ['./fix-res-home.component.css']
})
export class FixResHomeComponent implements OnInit {

  getCountryImage = getCountryImage;
  matches: IMatch[] = [];

  constructor(private service: AppTeamsService,
    private router: Router,
    private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.setActive(this.router.url.replace('/', ''));
    this.service.matches.subscribe((matches) => this.matches = matches);
  }

}
