import { combineReducers } from 'redux'

import { settingsReducer } from "./SettingsReducer";
import { optionsReducer } from './OptionsReducer';
import { previewReducer } from "./PreviewReducer";

export const rootReducer = combineReducers({
  settings: settingsReducer,
  options: optionsReducer,
  preview: previewReducer
})
