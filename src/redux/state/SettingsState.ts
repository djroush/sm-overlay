export type SettingsState = {
  theme: number,
  themeSlider: number,
  logo: number,
  mode: number,
  area: number,
  difficulty: number,
  start: number,
  morph: number,
  escape: number,
  bosses: number,
  avatars: number
}

export const defaultSettingsState: SettingsState = {
  theme: 0,
  themeSlider: 0,
  logo: 0,
  mode: 0,
  area: 0,
  difficulty: 0,
  start: 0,
  morph: 0,
  escape: 0,
  bosses: 0,
  avatars: 0
}