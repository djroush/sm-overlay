
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
export const themeSliderValues = [0,49,107,151,192,247,303]
export const createThemeMarks = (values: string[]): Mark[] => {
    return values.map((label, index) => { return { value: themeSliderValues[index], label } })
}

export const getThemeSliderIndex = (val: number) => {
    if (val < 25) {
        return 1;
    } else if (val < 78) {
        return 2;
    } else if (val < 129) {
        return 3;
    } else if (val < 172) {
        return 4;
    } else if (val < 220) {
        return 5;
    } else if (val < 275) {
        return 6;
    } else if (val < 304) {
        return 7;
    } else {
        return -1
    }
}

export const roundThemeSlider = (val: number) => {
    if (val < 25) {
        return 0;
    } else if (val < 78) {
        return 49;
    } else if (val < 129) {
        return 107;
    } else if (val < 172) {
        return 151;
    } else if (val < 220) {
        return 192;
    } else if (val < 275) {
        return 247;
    } else if (val < 304) {
        return 303;
    } else {
        return -1
    }
}


export default function SliderSetting(props: SliderSettingProps) {
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
