import { combineReducers } from 'redux'

import { settingsReducer } from "./SettingsReducer";
import { playersReducer } from './PlayersReducer';
import { optionsReducer } from './OptionsReducer';
import { previewReducer } from "./PreviewReducer";
import { actionsReducer } from './ActionsReducer';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  names: playersReducer,
  options: optionsReducer,
  preview: previewReducer,
  actions: actionsReducer
})
