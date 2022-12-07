
export interface IMatch {
  id: number;
  venue: string;
  location: string;
  status: string;
  attendance: string;
  stage_name: string;
  home_team_country: string;
  away_team_country: string;
  datetime: Date;
  winner: string;
  winner_code: string;
  home_team: IMatchTeam;
  away_team: IMatchTeam;
}

export interface IMatchTeam {
  country: string;
  name: string;
  goals: number;
  penalties: number;
}
