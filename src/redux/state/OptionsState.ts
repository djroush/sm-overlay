export type OptionsState = OptionsSettingsState & {
  hideWins: boolean,
  hideAvatar: boolean,
  hideTracker: boolean
  hidePlayers: boolean,
}

export type OptionsSettingsState = {
  hideLogo: boolean,
  hideSettings: boolean,
}

export const defaultOptionsState: OptionsState = {
  hidePlayers: false,
  hideLogo: false,
  hideSettings: false,
  hideTracker: false,
  hideAvatar: false,
  hideWins: false,
}

