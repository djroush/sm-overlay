
import { Grid, Input, InputLabel } from '@mui/material';
import { PlayersState } from '../redux/state/PlayersState';

export type PlayersProps = PlayersState & {
    changePlayer1: (event: React.ChangeEvent<HTMLInputElement>) => void
    changePlayer2: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PlayersComp(props: PlayersProps) {
    const { player1, player2, changePlayer1, changePlayer2 } = props
    return (
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <InputLabel>Player 1 Name</InputLabel>
            </Grid>
            <Grid item xs={9}>
                <Input id="player1" fullWidth={true} type="input" placeholder='Player 1' value={player1} onChange={changePlayer1} />
            </Grid>

            <Grid item xs={3}>
                <InputLabel>Player 2 Name</InputLabel>
            </Grid>
            <Grid item xs={9}>
                <Input id="player2" fullWidth={true} type="input" placeholder='Player 2' value={player2} onChange={changePlayer2} />
            </Grid>
        </Grid>
    )
}