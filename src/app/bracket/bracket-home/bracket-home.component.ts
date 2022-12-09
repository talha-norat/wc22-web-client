import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMatch } from 'src/app/core/models/match.interface';
import { AppTeamsService } from 'src/app/core/services/app-teams-service.service';
import { NavbarService } from 'src/app/navbar/navbar.service';

@Component({
  selector: 'app-bracket-home',
  templateUrl: './bracket-home.component.html',
  styleUrls: ['./bracket-home.component.css']
})
export class BracketHomeComponent implements OnInit {

  matches: IMatch[] = [];

  constructor(private service: AppTeamsService,
    private router: Router,
    private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.setActive(this.router.url.replace('/', ''));
    this.service.matches.subscribe((matches) => {
      if (matches && matches.length > 0) {
        this.matches = matches.filter(m => m.id > 48);
        console.log(this.matches);
      }
    });
  }

}
