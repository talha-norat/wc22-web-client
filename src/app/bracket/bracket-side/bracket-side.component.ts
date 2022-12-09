import { Component, Input, OnInit } from '@angular/core';
import { IMatch } from 'src/app/core/models/match.interface';

@Component({
  selector: 'app-bracket-side',
  templateUrl: './bracket-side.component.html',
  styleUrls: ['./bracket-side.component.css']
})
export class BracketSideComponent implements OnInit {

  @Input() matches: IMatch[] = [];
  @Input() filter: number[] = [];
  @Input() reversed = false;

  constructor() {
  }

  ngOnInit(): void {
    if (this.matches && this.matches.length > 0) {
      console.log(this.matches);
      console.log(this.matches[this.filter.slice(6, 7)[0]]);
    }
    // console.log(this.filter, this.reversed);
  }

}
