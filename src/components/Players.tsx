
import { Grid, Input, InputLabel, Stack } from '@mui/material';
import { PlayersState } from '../redux/state/PlayersState';

export type PlayersProps = PlayersState & {
    hidePlayers: boolean
    changePlayer1: (event: React.ChangeEvent<HTMLInputElement>) => void
    changePlayer2: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PlayersComp(props: PlayersProps) {
    const { player1, player2, hidePlayers, changePlayer1, changePlayer2 } = props
    return hidePlayers ? null : (
        <Grid container spacing={2}>
            <Grid container spacing={1} py={1}>
                <Grid item xs={3}>
                    <InputLabel>Player 1 Name</InputLabel>
                </Grid>
                <Grid item xs={9}>
                    <Input id="player1" fullWidth={true} type="input" placeholder='Player 1' value={player1} onChange={changePlayer1} />
                </Grid>
            </Grid>
            <Grid container spacing={1} py={1}>
                <Grid item xs={3}>
                    <InputLabel>Player 2 Name</InputLabel>
                </Grid>
                <Grid item xs={9}>
                    <Input id="player2" fullWidth={true} type="input" placeholder='Player 2' value={player2} onChange={changePlayer2} />
                </Grid>
            </Grid>
        </Grid>
    )
}
