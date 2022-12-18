import { defaultSettingsState, SettingsState } from './SettingsState'
import { defaultOptionsState, OptionsState } from './OptionsState'
import { defaultPreviewState, PreviewState } from './PreviewState'
import { defaultPlayersState, PlayersState } from './PlayersState'
import { ActionsState, defaultActionsState } from './ActionsState'

export type RootState = {
    settings: SettingsState,
    players: PlayersState,
    options: OptionsState,
    preview: PreviewState,
    actions: ActionsState,
}

export const defaultRootState = {
    settings: {...defaultSettingsState },
    players: {...defaultPlayersState },
    options: {...defaultOptionsState },
    preview: {...defaultPreviewState },
    actions: {...defaultActionsState }
}
