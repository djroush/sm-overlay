
import { Grid } from '@mui/material';
import SliderSetting from './SliderOption';
import { themeMarks, modeMarks, areaMarks, difficultyMarks, startMarks, morphMarks, escapeMarks, bossesMarks, logoMarks } from '../model/SliderValues';
import { SettingsState } from '../redux/state/SettingsState';

export type SettingsProps = SettingsState & {
    changeTheme: (_: Event, value: number | number[]) => void,
    changeLogo: (_: Event, value: number | number[]) => void,
    changeMode: (_: Event, value: number | number[]) => void,
    changeArea: (_: Event, value: number | number[]) => void,
    changeDifficulty: (_: Event, value: number | number[]) => void,
    changeStart: (_: Event, value: number | number[]) => void,
    changeMorph: (_: Event, value: number | number[]) => void,
    changeBosses: (_: Event, value: number | number[]) => void,
    changeEscape: (_: Event, value: number | number[]) => void,
}

export default function Settings(props: SettingsProps) {
    const { theme, logo, mode, area, difficulty, start, morph, bosses, escape,
        changeTheme,changeLogo, changeMode, changeArea, changeDifficulty, 
        changeStart, changeMorph, changeBosses, changeEscape
    } = props
    return (
        <Grid container spacing={1}>
            <SliderSetting label='Theme' value={theme} marks={themeMarks} onChange={changeTheme} />
            <SliderSetting label='Logo' value={logo} marks={logoMarks} onChange={changeLogo} />
            <SliderSetting label='Mode' value={mode} marks={modeMarks} onChange={changeMode} />
            <SliderSetting label='Area' value={area} marks={areaMarks} onChange={changeArea} />
            <SliderSetting label='Difficulty' value={difficulty} marks={difficultyMarks} onChange={changeDifficulty} />
            <SliderSetting label='Start Location' value={start} marks={startMarks} onChange={changeStart} />
            <SliderSetting label='Morph Location' value={morph} marks={morphMarks} onChange={changeMorph} />
            <SliderSetting label='Bosses' value={bosses} marks={bossesMarks} onChange={changeBosses} />
            <SliderSetting label='Escape' value={escape} marks={escapeMarks} onChange={changeEscape} />
        </Grid>
    )
}
