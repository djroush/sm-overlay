
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import { RootState } from '../redux/state/RootState';
import PlayersComp, { PlayersProps } from '../components/Players';

export default function Players() {
    const { players, options } = useSelector((state: RootState) => state)
    const { player1, player2 } = players
    const { hidePlayers} = options

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'PLAYERS/update-players' })
    }, [player1, player2])

    const changePlayer1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'PLAYERS/change-player1', value: event.target.value })
    }
    const changePlayer2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'PLAYERS/change-player2', value: event.target.value })
    }

    const props: PlayersProps = {
        ...players, hidePlayers, changePlayer1, changePlayer2
    }

    return <PlayersComp {...props} />
}
