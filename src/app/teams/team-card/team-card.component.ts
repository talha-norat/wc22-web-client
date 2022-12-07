import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITeam } from 'src/app/core/models/team.interface';
import { TeamDialogComponent } from 'src/app/shared/team-dialog/team-dialog.component';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent {

  @Input() data: ITeam;

  constructor(private dialog: MatDialog) { }

  onClick(): void {
    this.dialog.open(TeamDialogComponent, {
      data: this.data,
      width: '30%',
      panelClass: ['frosted-f10']
    });
  }

}
