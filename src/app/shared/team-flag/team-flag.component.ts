import { Component, Input, OnInit } from '@angular/core';
import { IMatchTeam } from 'src/app/core/models/match.interface';
import { ITeam } from 'src/app/core/models/team.interface';
import { getCountryImage } from 'src/environments/environment-base';

@Component({
  selector: 'app-team-flag',
  templateUrl: './team-flag.component.html',
  styleUrls: ['./team-flag.component.css']
})
export class TeamFlagComponent implements OnInit {

  getCountryImage = getCountryImage;

  @Input() smallFlag = false;

  @Input() hasBorder = true;
  @Input() data: ITeam | IMatchTeam;

  @Input() height = 62;
  @Input() width = 94;

  constructor() { }

  ngOnInit(): void {
    if (this.data) {
      console.log(this.data);
    }
  }

}
