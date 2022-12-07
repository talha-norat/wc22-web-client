import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class NavbarService {

  activeSubject: BehaviorSubject<string> = new BehaviorSubject(null);
  active = this.activeSubject.asObservable();

  public setActive(active: string): void {
    this.activeSubject.next(active);
  }

}
