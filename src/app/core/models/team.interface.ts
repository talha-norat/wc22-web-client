export interface ITeam {
  country: string;
  name: string;
  group_letter: string;
  group_points: number;
  wins: number;
  draws: number;
  losses: number;
  games_played: number;
  goals_for: number;
  goals_against: number;
  goal_differential: number;
  imgSrc?: string;
}

export interface ITeams {
  teams: ITeam[];
}
