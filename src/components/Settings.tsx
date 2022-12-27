
import { Grid } from '@mui/material';
import SliderSetting from './SliderSetting';
import { themeMarks, modeMarks, areaMarks, difficultyMarks, startMarks, morphMarks, escapeMarks, bossesMarks, logoMarks, avatarsMarks } from '../model/SliderValues';
import { SettingsState } from '../redux/state/SettingsState';
import { OptionsSettingsState } from '../redux/state/OptionsState';
import SliderThemeSetting from './SliderThemeSetting';

export type SettingsProps = SettingsState & OptionsSettingsState & {
    changeTheme: (_: Event, value: number | number[]) => void,
    changeLogo: (_: Event, value: number | number[]) => void,
    changeMode: (_: Event, value: number | number[]) => void,
    changeArea: (_: Event, value: number | number[]) => void,
    changeDifficulty: (_: Event, value: number | number[]) => void,
    changeStart: (_: Event, value: number | number[]) => void,
    changeMorph: (_: Event, value: number | number[]) => void,
    changeBosses: (_: Event, value: number | number[]) => void,
    changeEscape: (_: Event, value: number | number[]) => void,
    changeAvatars: (_: Event, value: number | number[]) => void,
}

export default function Settings(props: SettingsProps) {
    const { theme, logo, mode, area, difficulty, start, morph, bosses, escape, avatars,
        hideLogo, hideSettings, hideAvatar,
        changeTheme,changeLogo, changeMode, changeArea, changeDifficulty, 
        changeStart, changeMorph, changeBosses, changeEscape, changeAvatars
    } = props
    return (
        <Grid container spacing={2} columns={8}>
            {/*<SliderSetting label='ThemeOrig' value={theme} marks={themeMarks} onChange={changeTheme} />*/}
            <SliderThemeSetting label='Theme' value={theme} marks={themeMarks} onChange={changeTheme} />
            {hideLogo ? null : (
                <SliderSetting label='Logo' value={logo} marks={logoMarks} onChange={changeLogo} />
            )}
            {hideAvatar ? null : (
                <SliderSetting label='Avatars' value={avatars} marks={avatarsMarks} onChange={changeAvatars} />
            )}
            {hideSettings ? null : (<>
                <SliderSetting label='Mode' value={mode} marks={modeMarks} onChange={changeMode} />
                <SliderSetting label='Area' value={area} marks={areaMarks} onChange={changeArea} />
                <SliderSetting label='Difficulty' value={difficulty} marks={difficultyMarks} onChange={changeDifficulty} />
                <SliderSetting label='Start Location' value={start} marks={startMarks} onChange={changeStart} />
                <SliderSetting label='Morph Location' value={morph} marks={morphMarks} onChange={changeMorph} />
                <SliderSetting label='Bosses' value={bosses} marks={bossesMarks} onChange={changeBosses} />
                <SliderSetting label='Escape' value={escape} marks={escapeMarks} onChange={changeEscape} />
            </>)}
        </Grid>
    )
}
