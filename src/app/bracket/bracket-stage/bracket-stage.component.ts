import { Component, Input, OnInit } from '@angular/core';
import { IMatch } from 'src/app/core/models/match.interface';

@Component({
  selector: 'app-bracket-stage',
  templateUrl: './bracket-stage.component.html',
  styleUrls: ['./bracket-stage.component.css']
})
export class BracketStageComponent implements OnInit {

  @Input() matches: IMatch[] = [];
  @Input() filter: number[] = [];
  @Input() reversed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
