
import { Box, Grid, InputLabel, Slider } from '@mui/material';
import { Mark } from '../model/SliderValues';

export type SliderSettingProps = {
    disabled?: boolean
    label: string,
    value: number,
    marks: Mark[]
    onChange: (event: Event, value: number | number[]) => void
}

// Space is tight, so line up the marks based on the width of the text, don't change the order of themeValues or this will break!
export const themeSliderValues = [0,49,108,153,195,248,303]
export const createThemeMarks = (values: string[]): Mark[] => {
    return values.map((label, index) => { return { value: themeSliderValues[index], label } })
}

export const roundThemeSlider = (val: number) => {
    if (val < 25) {
        return {theme: 0, themeSlider: themeSliderValues[0]};
    } else if (val < 78) {
        return {theme: 1, themeSlider: themeSliderValues[1]};
    } else if (val < 130) {
        return {theme: 2, themeSlider: themeSliderValues[2]};
    } else if (val < 174) {
        return {theme: 3, themeSlider: themeSliderValues[3]};
    } else if (val < 220) {
        return {theme: 4, themeSlider: themeSliderValues[4]};
    } else if (val < 275) {
        return {theme: 5, themeSlider: themeSliderValues[5]};
    } else if (val < 304) {
        return {theme: 6, themeSlider: themeSliderValues[6]};
    } else {
        return {theme: -1, themeSlider: -1};
    }
}

//TODO: make this a generic non-linear slider which can be parameterized
export default function SliderThemeSetting(props: SliderSettingProps) {
    const { disabled, label, value, marks, onChange } = { ...props }

    return (
        <>
            <Grid item xs={2}>
                <InputLabel>{label}</InputLabel>
            </Grid>
            <Grid item xs={6}>
                <Box px={4}>
                    <Slider disabled={disabled ?? false} marks={marks} min={0} max={303} value={value} size='small' onChange={onChange} />
                </Box>
            </Grid>
        </>
    )
}
