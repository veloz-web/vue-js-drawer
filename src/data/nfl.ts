export interface Team {
    name: string
    icon: string
  }
  
  export interface Division {
    name: string
    icon: string
    teams: Team[]
  }
  
  export interface Conference {
    name: string
    icon: string
    divisions: Division[]
  }
  
  export const AFC: Conference = {
    name: 'AFC',
    icon: 'home-floor-a',
    divisions: [
    {
      name: 'AFC North',
      icon: 'mdi-shield-crown',
      teams: [
        { name: 'Baltimore Ravens', icon: 'mdi-bird' },
        { name: 'Cincinnati Bengals', icon: 'mdi-cat' },
        { name: 'Cleveland Browns', icon: 'mdi-dog-side' },
        { name: 'Pittsburgh Steelers', icon: 'mdi-shield' }
      ]
    },
    {
      name: 'AFC South',
      icon: 'mdi-shield-star',
      teams: [
        { name: 'Houston Texans', icon: 'mdi-star' },
        { name: 'Indianapolis Colts', icon: 'mdi-horse' },
        { name: 'Jacksonville Jaguars', icon: 'mdi-cat' },
        { name: 'Tennessee Titans', icon: 'mdi-sword' }
      ]
    },
    {
      name: 'AFC East',
      icon: 'mdi-shield-sun',
      teams: [
        { name: 'Buffalo Bills', icon: 'mdi-buffalo' },
        { name: 'Miami Dolphins', icon: 'mdi-dolphin' },
        { name: 'New England Patriots', icon: 'mdi-flag' },
        { name: 'New York Jets', icon: 'mdi-airplane' }
      ]
    },
    {
      name: 'AFC West',
      icon: 'mdi-shield-moon',
      teams: [
        { name: 'Denver Broncos', icon: 'mdi-horse-variant' },
        { name: 'Kansas City Chiefs', icon: 'mdi-axe' },
        { name: 'Las Vegas Raiders', icon: 'mdi-sword-cross' },
        { name: 'Los Angeles Chargers', icon: 'mdi-lightning-bolt' }
      ]
    }
]
}
  export const NFC: Division[] = {
    name: 'NFC',
    icon: 'home-floor-b',
    divisions: [
        {
            "name": "NFC North",
            "icon": "mdi-compass-rose",
            "teams": [
              { "name": "Chicago Bears", "icon": "mdi-paw" },
              { "name": "Detroit Lions", "icon": "mdi-cat" },
              { "name": "Green Bay Packers", "icon": "mdi-shield-crown" },
              { "name": "Minnesota Vikings", "icon": "mdi-shield-sword" }
            ]
          },
          {
            "name": "NFC East",
            "icon": "mdi-arrow-right",
            "teams": [
              { "name": "Dallas Cowboys", "icon": "mdi-star" },
              { "name": "New York Giants", "icon": "mdi-office-building" },  // Changed from mdi-skyscraper
              { "name": "Philadelphia Eagles", "icon": "mdi-bird" },
              { "name": "Washington Commanders", "icon": "mdi-shield-star" }
            ]
          },
          {
            "name": "NFC South",
            "icon": "mdi-arrow-down",
            "teams": [
              { "name": "Atlanta Falcons", "icon": "mdi-bird" },
              { "name": "Carolina Panthers", "icon": "mdi-cat" },
              { "name": "New Orleans Saints", "icon": "mdi-fleur-de-lis" },
              { "name": "Tampa Bay Buccaneers", "icon": "mdi-sword-cross" }
            ]
          },
          {
            "name": "NFC West",
            "icon": "mdi-arrow-left",
            "teams": [
              { "name": "Arizona Cardinals", "icon": "mdi-bird" },
              { "name": "Los Angeles Rams", "icon": "mdi-shield" },  // Changed from mdi-horn
              { "name": "San Francisco 49ers", "icon": "mdi-pickaxe" },
              { "name": "Seattle Seahawks", "icon": "mdi-bird" }
            ]
          }
    ]
  }
  
  export const conferences: Conference[] = [
    AFC,
    NFC
  ]
  