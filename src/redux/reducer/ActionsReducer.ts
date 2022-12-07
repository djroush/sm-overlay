import { defaultActionsState } from "../state/ActionsState";

export const actionsReducer = (state = defaultActionsState, action: any) => {
  if (action.type === 'ACTIONS/change-showApiCall') {
    return {...state, showApiCall: action.value}
  }

  return state;
};