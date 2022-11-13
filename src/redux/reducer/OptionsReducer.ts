import { defaultOptionsState } from "../state/OptionsState";

export const optionsReducer = (state = defaultOptionsState, action: any) => {
  if (action.type === 'OPTIONS/change-showPlayers') {
    return {...state, showPlayers: action.value}
  } else if (action.type === 'OPTIONS/change-showLogo') {
    return {...state, showLogo: action.value}
  } else if (action.type === 'OPTIONS/change-showSettings') {
    return {...state, showSettings: action.value}
  } else if (action.type === 'OPTIONS/change-showTracker') {
    return {...state, showTracker: action.value}
  } else if (action.type === 'OPTIONS/change-showAvatar') {
    return {...state, showAvatar: action.value}
  } else if (action.type === 'OPTIONS/change-showWins') {
    return {...state, showWins: action.value}
  } 

  return state;
};