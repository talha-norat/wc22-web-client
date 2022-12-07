import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGroup, IGroups } from '../models/group.interface';
import { IMatch } from '../models/match.interface';

@Injectable({
  providedIn: 'root'
})
export class WorldCupApiService {

  constructor(private http: HttpClient) { }

  public getGroups(): Observable<IGroups> {
    const url = `${environment.api.home}/${environment.api.teams}`;
    return this.http.get<IGroups>(url);
  }

  public getMatches(): Observable<IMatch[]> {
    const url = `${environment.api.home}/${environment.api.matches}`;
    return this.http.get<IMatch[]>(url);
  }
}
