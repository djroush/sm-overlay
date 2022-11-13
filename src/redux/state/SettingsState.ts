export type SettingsState = {
  theme: number,
  mode: number,
  area: number,
  difficulty: number,
  start: number,
  morph: number,
  escape: number,
  bosses: number
}

export const defaultSettingsState: SettingsState = {
  theme: 1,
  mode: 1,
  area: 1,
  difficulty: 1,
  start: 1,
  morph: 1,
  escape: 1,
  bosses: 1,
}