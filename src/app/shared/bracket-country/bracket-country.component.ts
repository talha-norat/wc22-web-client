import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bracket-country',
  templateUrl: './bracket-country.component.html',
  styleUrls: ['./bracket-country.component.css']
})
export class BracketCountryComponent implements OnInit {

  @Input() hasBorder = true;
  @Input() imageSource: string;

  @Input() height = 100;
  @Input() width = 100;

  constructor() { }

  ngOnInit(): void {
    this.imageSource = this.imageSource.toLowerCase();
  }

}
