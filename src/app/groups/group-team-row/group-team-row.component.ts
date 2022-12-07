import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITeam } from 'src/app/core/models/team.interface';
import { TeamDialogComponent } from 'src/app/shared/team-dialog/team-dialog.component';
import { avifTeams } from 'src/environments/environment-base';

@Component({
  selector: 'app-group-team-row',
  templateUrl: './group-team-row.component.html',
  styleUrls: ['./group-team-row.component.css']
})
export class GroupTeamRowComponent implements OnInit {

  @Input() fullWidth = true;
  @Input() team: ITeam;

  constructor(private dialog: MatDialog) { }

  onClick(): void {
    this.dialog.open(TeamDialogComponent, {
      data: this.team,
      width: '30%',
      panelClass: ['frosted-f10']
    });
  }

  ngOnInit(): void {
    this.team.imgSrc = this.getCountryImage(this.team.country);
  }

  getCountryImage(country: string): string {
    return avifTeams.includes(country) ? `assets/images/${country}.avif` : `assets/images/${country}.webp`;
  }
}
