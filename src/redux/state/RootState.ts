import { defaultSettingsState, SettingsState } from './SettingsState'
import { defaultOptionsState, OptionsState } from './OptionsState'
import { defaultPreviewState, PreviewState } from './PreviewState'
import { defaultPlayersState, PlayersState } from './PlayersState'

export type RootState = {
    settings: SettingsState,
    names: PlayersState,
    options: OptionsState,
    preview: PreviewState
}

export const defaultRootState = {
    settings: {...defaultSettingsState },
    names: {...defaultPlayersState },
    options: { ...defaultOptionsState },
    preview: { ...defaultPreviewState }
}
