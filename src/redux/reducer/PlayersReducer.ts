import { defaultPlayersState } from "../state/PlayersState";

export const playersReducer = (state = defaultPlayersState, action: any) => {
  if (action.type === 'PLAYERS/change-player1') {
    return {...state, player1: action.value}
  } else if (action.type === 'PLAYERS/change-player2') {
    return {...state, player2: action.value}
  } 

  return state;
};