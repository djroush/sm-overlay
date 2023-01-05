export type OptionsState = OptionsSettingsState & OptionsAlignmentState & {
  hideWins: boolean,
  hideTracker: boolean
  hidePlayers: boolean,
}

export type OptionsSettingsState = {
  hideLogo: boolean,
  hideSettings: boolean,
  hideAvatar: boolean,
}

export type OptionsAlignmentState = {
  leftAlignPlayers: boolean,
  logoY: number,
  settingsY: number
}

export const defaultOptionsState: OptionsState = {
  hidePlayers: false,
  hideLogo: false,
  hideSettings: false,
  hideTracker: false,
  hideAvatar: false,
  hideWins: false,
  leftAlignPlayers: false,
  logoY: 80,
  settingsY: 165
}

