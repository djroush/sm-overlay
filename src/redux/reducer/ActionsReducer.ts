import { defaultActionsState } from "../state/ActionsState";

export const actionsReducer = (state = defaultActionsState, action: any) => {
  if (action.type === 'ACTIONS/change-showCopyLink') {
    return {...state, showCopyLink: action.value}
  }

  return state;
};