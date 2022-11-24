import { defaultSettingsState } from "../state/SettingsState";

export const settingsReducer = (state = defaultSettingsState, action: any) => {
  if (action.type === 'SETTINGS/change-theme') {
    return {...state, theme: action.value}
  } else if (action.type === 'SETTINGS/change-mode') {
    return {...state, mode: action.value}
  } else if (action.type === 'SETTINGS/change-area') {
    return {...state, area: action.value}
  } else if (action.type === 'SETTINGS/change-difficulty') {
    return {...state, difficulty: action.value}
  } else if (action.type === 'SETTINGS/change-start') {
    return {...state, start: action.value}
  } else if (action.type === 'SETTINGS/change-morph') {
    return {...state, morph: action.value}
  } else if (action.type === 'SETTINGS/change-escape') {
    return {...state, escape: action.value}
  } else if (action.type === 'SETTINGS/change-bosses') {
    return {...state, bosses: action.value}
  } else if (action.type === 'SETTINGS/change-hideTracker') {
    return {...state, hideTracker: action.value}
  } else if (action.type === 'SETTINGS/change-hideAvatar') {
    return {...state, hideAvatar: action.value}
  } else if (action.type === 'SETTINGS/change-hideWins') {
    return {...state, hideWins: action.value}
  } else if (action.type === 'SETTINGS/change-player1') {
    return {...state, player1: action.value}
  } else if (action.type === 'SETTINGS/change-player2') {
    return {...state, player2: action.value}
  } 

  return state;
};