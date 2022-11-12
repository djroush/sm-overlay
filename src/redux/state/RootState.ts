import { defaultSettingsState, SettingsState } from './SettingsState'
import { defaultOptionsState, OptionsState } from './OptionsState'
import { defaultPreviewState, PreviewState } from './PreviewState'

export type RootState = {
    settings: SettingsState,
    options: OptionsState,
    preview: PreviewState
}

export const defaultRootState = {
    settings: {...defaultSettingsState },
    options: { ...defaultOptionsState },
    preview: { ...defaultPreviewState }
}
