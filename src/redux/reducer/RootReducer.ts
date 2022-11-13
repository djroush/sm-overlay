import { combineReducers } from 'redux'

import { settingsReducer } from "./SettingsReducer";
import { playersReducer } from './PlayersReducer';
import { optionsReducer } from './OptionsReducer';
import { previewReducer } from "./PreviewReducer";

export const rootReducer = combineReducers({
  settings: settingsReducer,
  names: playersReducer,
  options: optionsReducer,
  preview: previewReducer
})
