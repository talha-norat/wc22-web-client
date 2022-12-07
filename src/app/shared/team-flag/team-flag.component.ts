import { Component, Input, OnInit } from '@angular/core';
import { ITeam } from 'src/app/core/models/team.interface';

@Component({
  selector: 'app-team-flag',
  templateUrl: './team-flag.component.html',
  styleUrls: ['./team-flag.component.css']
})
export class TeamFlagComponent implements OnInit {

  @Input() hasBorder = true;
  @Input() data: ITeam;

  @Input() height = 62;
  @Input() width = 94;

  constructor() { }

  ngOnInit(): void {
  }

}
