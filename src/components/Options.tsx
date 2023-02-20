
import { Grid } from '@mui/material';
import { OptionsState } from '../redux/state/OptionsState';
import LabeledCheckbox from './LabeledCheckbox';
import TextBox from './Textbox';

export type OptionsProps = OptionsState & {
    changeHidePlayers: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideLogo: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideSettings: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideTracker: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideAvatar: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideWins: (_: React.SyntheticEvent, checked: boolean) => void,
    changeLeftAlignPlayers: (_: React.SyntheticEvent, checked: boolean) => void,
    changeLogoY: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    changeSettingsY: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export default function Options(props: OptionsProps) {
    const { hidePlayers, hideLogo, hideSettings, hideTracker, hideAvatar, hideWins, leftAlignPlayers,
        logoY, settingsY, changeHidePlayers, changeHideLogo, changeHideSettings, changeHideTracker,
        changeHideAvatar, changeHideWins, changeLeftAlignPlayers, changeLogoY, changeSettingsY
    } = props

    return (
        <Grid container id='options' pr={4}>
            <Grid container spacing={1} minHeight={42}>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Tracker' value={hideTracker} onChange={changeHideTracker} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Avatar' value={hideAvatar} onChange={changeHideAvatar} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Wins' value={hideWins} onChange={changeHideWins} />
                </Grid>
            </Grid>
            <Grid container spacing={1} minHeight={42}>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Logo' value={hideLogo} onChange={changeHideLogo} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Settings' value={hideSettings} onChange={changeHideSettings} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Player Names' value={hidePlayers} onChange={changeHidePlayers} />
                </Grid>
            </Grid >
            <Grid container spacing={1} minHeight={42}>
                <Grid item xs={4}>
                    {hideLogo ? null : (
                        <TextBox label="Logo Y Pos:" value={logoY} onChange={changeLogoY} />
                    )}
                </Grid>
                <Grid item xs={4}>
                    {hideSettings ? null : (
                    <TextBox label="Settings Y Pos:" value={settingsY} onChange={changeSettingsY} />
                    )}
                </Grid>
                <Grid item xs={4}>
                   {hidePlayers ? null : (
                    <LabeledCheckbox label='Left Align Players' value={leftAlignPlayers} onChange={changeLeftAlignPlayers} />
                   )}
                </Grid>
            </Grid >
        </Grid>
    )
}
