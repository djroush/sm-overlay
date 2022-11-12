
import { Grid, Input, InputLabel, Stack } from '@mui/material';
import Option from './SliderOption';
import { themeMarks, modeMarks, areaMarks, difficultyMarks, startMarks, morphMarks, escapeMarks, bossesMarks } from '../model/SliderValues';
import { SettingsState } from '../redux/state/SettingsState';

export type SettingsProps = SettingsState &  {
    changeTheme: (_: Event, value: number | number[]) => void,
    changeMode: (_: Event, value: number | number[]) => void,
    changeArea: (_: Event, value: number | number[]) => void,
    changeDifficulty: (_: Event, value: number | number[]) => void,
    changeStart: (_: Event, value: number | number[]) => void,
    changeMorph: (_: Event, value: number | number[]) => void,
    changeBosses: (_: Event, value: number | number[]) => void,
    changeEscape: (_: Event, value: number | number[]) => void,
    changePlayer1: (event: React.ChangeEvent<HTMLInputElement>) => void
    changePlayer2: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Settings(props: SettingsProps) {
    const {theme, mode, area, difficulty, start, morph, bosses, escape, player1, player2,
        changeTheme,changeMode, changeArea, changeDifficulty, changeStart, changeMorph, 
        changeBosses, changeEscape, changePlayer1, changePlayer2
    } = props
    return (
        <Stack spacing={2} padding={3}>
            <Grid container spacing={1}>
                <Option label='Theme' disabled value={theme} marks={themeMarks} onChange={changeTheme} />
                <Option label='Mode' value={mode} marks={modeMarks} onChange={changeMode} />
                <Option label='Area' value={area} marks={areaMarks} onChange={changeArea} />
                <Option label='Difficulty' value={difficulty} marks={difficultyMarks} onChange={changeDifficulty} />
                <Option label='Start Location' value={start} marks={startMarks} onChange={changeStart} />
                <Option label='Morph Location' value={morph} marks={morphMarks} onChange={changeMorph} />
                <Option label='Bosses' value={bosses} marks={bossesMarks} onChange={changeBosses} />
                <Option label='Escape' value={escape} marks={escapeMarks} onChange={changeEscape} />
            </Grid>
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
        </Stack>
    )
}
