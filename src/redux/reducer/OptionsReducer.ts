import { defaultOptionsState } from "../state/OptionsState";

export const optionsReducer = (state = defaultOptionsState, action: any) => {
  if (action.type === 'OPTIONS/change-hideNames') {
    return {...state, hideNames: action.value}
  } else if (action.type === 'OPTIONS/change-hideLogo') {
    return {...state, hideLogo: action.value}
  } else if (action.type === 'OPTIONS/change-hideSettings') {
    return {...state, hideSettings: action.value}
  } else if (action.type === 'OPTIONS/change-showTracker') {
    return {...state, showTracker: action.value}
  } else if (action.type === 'OPTIONS/change-showAvatar') {
    return {...state, showAvatar: action.value}
  } else if (action.type === 'OPTIONS/change-showWins') {
    return {...state, showWins: action.value}
  } 

  return state;
};