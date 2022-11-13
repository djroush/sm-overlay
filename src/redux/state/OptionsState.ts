export type OptionsState = {
  showPlayers: boolean,
  showLogo: boolean,
  showSettings: boolean,
  showWins: boolean,
  showAvatar: boolean,
  showTracker: boolean
}

export const defaultOptionsState: OptionsState = {
  showPlayers: true,
  showLogo: true,
  showSettings: true,
  showTracker: true,
  showAvatar: true,
  showWins: true,
}