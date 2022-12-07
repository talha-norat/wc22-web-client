import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  active: string;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.active.subscribe((route) => this.active = route);
  }

}
