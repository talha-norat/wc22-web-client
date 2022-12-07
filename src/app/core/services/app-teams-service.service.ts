import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGroup } from '../models/group.interface';
import { WorldCupApiService } from './world-cup-api.service';

@Injectable({
  providedIn: 'root'
})
export class AppTeamsService {

  groupsSubject: BehaviorSubject<IGroup[]> = new BehaviorSubject<IGroup[]>([]);
  groups = this.groupsSubject.asObservable();

  constructor(private apiService: WorldCupApiService) {
    this.loadTeamsFromApi();
  }

  private loadTeamsFromApi(): void {
    this.apiService.getGroups().subscribe(
      (res) => this.groupsSubject.next(res.groups),
      (err) => console.log(err)
    );
  }

}
