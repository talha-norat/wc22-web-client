import { Component, Input, OnInit } from '@angular/core';
import { IGroup } from 'src/app/core/models/group.interface';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() fullWidth = true;
  @Input() group: IGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
