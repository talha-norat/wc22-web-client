import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGroup } from '../models/group.interface';
import { IMatch } from '../models/match.interface';
import { WorldCupApiService } from './world-cup-api.service';

@Injectable({
  providedIn: 'root'
})
export class AppTeamsService {

  groupsSubject: BehaviorSubject<IGroup[]> = new BehaviorSubject<IGroup[]>([]);
  groups = this.groupsSubject.asObservable();

  matchesSubject: BehaviorSubject<IMatch[]> = new BehaviorSubject<IMatch[]>([]);
  matches = this.matchesSubject.asObservable();

  constructor(private apiService: WorldCupApiService) {
    this.loadTeamsFromApi();
    this.loadMatchesFromApi();
  }

  private loadTeamsFromApi(): void {
    this.apiService.getGroups().subscribe(
      (res) => this.groupsSubject.next(res.groups),
      (err) => console.log(err)
    );
  }

  private loadMatchesFromApi(): void {
    this.apiService.getMatches().subscribe(
      (res) => this.matchesSubject.next(res),
      (err) => console.log(err)
    );
  }

}
