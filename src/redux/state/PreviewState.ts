export type PreviewState = {
  background: string | null,
  logo: string | null,
  streams: string | null,
  names: string | null,
  timers: string | null,
  trackers: string | null,
  avatars: string | null,
  wins: string | null,
  players: string | null,
  settings: string | null,
}

export const defaultPreviewState: PreviewState = {
  background: null,
  logo: null,
  streams: null,
  names: null,
  timers: null,
  trackers: null,
  avatars: null,
  wins: null,
  players: null,
  settings: null,
}
