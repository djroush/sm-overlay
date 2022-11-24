import { defaultOptionsState } from "../state/OptionsState";

export const optionsReducer = (state = defaultOptionsState, action: any) => {
  if (action.type === 'OPTIONS/change-hidePlayers') {
    return {...state, hidePlayers: action.value}
  } else if (action.type === 'OPTIONS/change-hideLogo') {
    return {...state, hideLogo: action.value}
  } else if (action.type === 'OPTIONS/change-hideSettings') {
    return {...state, hideSettings: action.value}
  } else if (action.type === 'OPTIONS/change-hideTracker') {
    return {...state, hideTracker: action.value}
  } else if (action.type === 'OPTIONS/change-hideAvatar') {
    return {...state, hideAvatar: action.value}
  } else if (action.type === 'OPTIONS/change-hideWins') {
    return {...state, hideWins: action.value}
  } 

  return state;
};