export type OptionsState = OptionsSettingsState & {
  hideWins: boolean,
  hideTracker: boolean
  hidePlayers: boolean,
}

export type OptionsSettingsState = {
  hideLogo: boolean,
  hideSettings: boolean,
  hideAvatar: boolean,
}

export const defaultOptionsState: OptionsState = {
  hidePlayers: false,
  hideLogo: false,
  hideSettings: false,
  hideTracker: false,
  hideAvatar: false,
  hideWins: false,
}

