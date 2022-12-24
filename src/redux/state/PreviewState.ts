export type PreviewState = {
  background: string | null,
  streams: string | null,
  names: string | null,
  timers: string | null,
  trackers: string | null,
  avatars: string | null,
  wins: string | null,
  playerAvatars: string | null,
  logo: string | null,
  players: string | null,
  settings: string | null,
}

export const defaultPreviewState: PreviewState = {
  background: null,
  streams: null,
  names: null,
  timers: null,
  trackers: null,
  avatars: null,
  playerAvatars: null,
  wins: null,
  logo: null,
  players: null,
  settings: null,
}
