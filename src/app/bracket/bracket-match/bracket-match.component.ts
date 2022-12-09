import { Component, Input } from '@angular/core';
import { IMatch } from 'src/app/core/models/match.interface';

@Component({
  selector: 'app-bracket-match [match]',
  templateUrl: './bracket-match.component.html',
  styleUrls: ['./bracket-match.component.css']
})
export class BracketMatchComponent {

  @Input() match: IMatch;
  @Input() reversed = false;

}
