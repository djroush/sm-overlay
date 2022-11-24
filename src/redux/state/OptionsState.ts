export type OptionsState = {
  hidePlayers: boolean,
  hideLogo: boolean,
  hideSettings: boolean,
  hideWins: boolean,
  hideAvatar: boolean,
  hideTracker: boolean
}

export const defaultOptionsState: OptionsState = {
  hidePlayers: false,
  hideLogo: false,
  hideSettings: false,
  hideTracker: false,
  hideAvatar: false,
  hideWins: false,
}