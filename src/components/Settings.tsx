
import { Grid } from '@mui/material';
import Option from './SliderOption';
import { themeMarks, modeMarks, areaMarks, difficultyMarks, startMarks, morphMarks, escapeMarks, bossesMarks } from '../model/SliderValues';
import { SettingsState } from '../redux/state/SettingsState';

export type SettingsProps = SettingsState & {
    changeTheme: (_: Event, value: number | number[]) => void,
    changeMode: (_: Event, value: number | number[]) => void,
    changeArea: (_: Event, value: number | number[]) => void,
    changeDifficulty: (_: Event, value: number | number[]) => void,
    changeStart: (_: Event, value: number | number[]) => void,
    changeMorph: (_: Event, value: number | number[]) => void,
    changeBosses: (_: Event, value: number | number[]) => void,
    changeEscape: (_: Event, value: number | number[]) => void,
}

export default function Settings(props: SettingsProps) {
    const { theme, mode, area, difficulty, start, morph, bosses, escape,
        changeTheme, changeMode, changeArea, changeDifficulty, changeStart, changeMorph,
        changeBosses, changeEscape
    } = props
    return (
        <Grid id='settings' container spacing={1}>
            <Option label='Theme' value={theme} marks={themeMarks} onChange={changeTheme} />
            <Option label='Mode' value={mode} marks={modeMarks} onChange={changeMode} />
            <Option label='Area' value={area} marks={areaMarks} onChange={changeArea} />
            <Option label='Difficulty' value={difficulty} marks={difficultyMarks} onChange={changeDifficulty} />
            <Option label='Start Location' value={start} marks={startMarks} onChange={changeStart} />
            <Option label='Morph Location' value={morph} marks={morphMarks} onChange={changeMorph} />
            <Option label='Bosses' value={bosses} marks={bossesMarks} onChange={changeBosses} />
            <Option label='Escape' value={escape} marks={escapeMarks} onChange={changeEscape} />
        </Grid>
    )
}
