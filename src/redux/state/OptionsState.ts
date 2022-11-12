export type OptionsState = {
  hideNames: boolean,
  hideLogo: boolean,
  hideSettings: boolean,
  showWins: boolean,
  showAvatar: boolean,
  showTracker: boolean
}

export const defaultOptionsState: OptionsState = {
  hideNames: false,
  hideLogo: false,
  hideSettings: false,
  showTracker: true,
  showAvatar: true,
  showWins: true,
}