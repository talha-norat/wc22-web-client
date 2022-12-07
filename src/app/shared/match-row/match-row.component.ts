import { Component, Input, OnInit } from '@angular/core';
import { IMatch } from 'src/app/core/models/match.interface';
import { getCountryImage } from 'src/environments/environment-base';

@Component({
  selector: 'app-match-row',
  templateUrl: './match-row.component.html',
  styleUrls: ['./match-row.component.css']
})
export class MatchRowComponent implements OnInit {

  getCountryImage = getCountryImage;

  @Input() match: IMatch;

  constructor() { }

  ngOnInit(): void {
  }

}
