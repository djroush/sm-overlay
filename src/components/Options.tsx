
import { Grid, Stack } from '@mui/material';
import { OptionsState } from '../redux/state/OptionsState';
import LabeledCheckbox from './LabeledCheckbox';

export type OptionsProps = OptionsState & {
    changeHideNames: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideLogo: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideSettings: (_: React.SyntheticEvent, checked: boolean) => void,
    changeShowTracker: (_: React.SyntheticEvent, checked: boolean) => void,
    changeShowAvatar: (_: React.SyntheticEvent, checked: boolean) => void,
    changeShowWins: (_: React.SyntheticEvent, checked: boolean) => void,
}

export default function Options(props: OptionsProps) {
    const { hideNames, hideLogo, hideSettings, showTracker, showAvatar, showWins, 
        changeHideNames, changeHideLogo, changeHideSettings, changeShowTracker,
        changeShowAvatar, changeShowWins } = props

    return (
        <Stack>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide&nbsp;Names' value={hideNames ?? false} onChange={changeHideNames} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide&nbsp;Logo' value={hideLogo ?? false} onChange={changeHideLogo} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide&nbsp;Settings' value={hideSettings ?? false} onChange={changeHideSettings} />
                </Grid>
            </Grid >
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Show&nbsp;Tracker' value={showTracker ?? true} onChange={changeShowTracker} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Show&nbsp;Avatar' value={showAvatar ?? true} onChange={changeShowAvatar} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Show&nbsp;Wins' value={showWins ?? true} onChange={changeShowWins} />
                </Grid>
            </Grid >
        </Stack>
    )
}
