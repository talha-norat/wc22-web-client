import { ITeam } from "./team.interface";

export interface IGroup {
  letter: string;
  teams: ITeam[];
}

export interface IGroups {
  groups: IGroup[];
}
