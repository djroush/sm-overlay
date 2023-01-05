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
  }  else if (action.type === 'OPTIONS/change-leftAlignPlayers') {
    return {...state, leftAlignPlayers: action.value}
  }  else if (action.type === 'OPTIONS/change-logoY') {
    return {...state, logoY: action.value}
  }  else if (action.type === 'OPTIONS/change-settingsY') {
    return {...state, settingsY: action.value}
  } 

  return state;
};