export const env = {
  api: {
    home: "https://worldcupjson.net",
    teams: "teams",
    matches: "matches"
  }
}

export const avifTeams = ['AUS', 'BRA', 'CRO', 'ECU', 'ESP', 'GER', 'IRN', 'KOR', 'KSA', 'MEX', 'POR', 'SRB', 'USA', 'WAL'];

export function getCountryImage(country: string): string {
  return avifTeams.includes(country) ? `assets/images/${country}.avif` : `assets/images/${country}.webp`;
}

