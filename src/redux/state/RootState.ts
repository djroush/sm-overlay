import { defaultSettingsState, SettingsState } from './SettingsState'
import { defaultOptionsState, OptionsState } from './OptionsState'
import { defaultPreviewState, PreviewState } from './PreviewState'
import { defaultNamesState, NamesState } from './PlayersState'
import { ActionsState, defaultActionsState } from './ActionsState'

export type RootState = {
    settings: SettingsState,
    names: NamesState,
    options: OptionsState,
    preview: PreviewState,
    actions: ActionsState,
}

export const defaultRootState = {
    settings: {...defaultSettingsState },
    names: {...defaultNamesState },
    options: {...defaultOptionsState },
    preview: {...defaultPreviewState },
    actions: {...defaultActionsState }
}
