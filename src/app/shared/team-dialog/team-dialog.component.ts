import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMatch } from 'src/app/core/models/match.interface';
import { AppTeamsService } from 'src/app/core/services/app-teams-service.service';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent implements OnInit {

  data: any;
  matches: IMatch[] = [];

  constructor(private dialogRef: MatDialogRef<TeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private appService: AppTeamsService) {
    this.data = data;
  }

  ngOnInit(): void {
    this.appService.matches.subscribe((res) => {
      this.matches = res && res.length > 0 ? res.filter(m => [m.home_team_country, m.away_team_country].includes(this.data.country)) : [];
    });
  }

}
