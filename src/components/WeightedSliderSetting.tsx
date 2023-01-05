
import { Box, Grid, InputLabel, Slider } from '@mui/material';
import { Mark } from '../model/SliderValues';

export type SliderSettingProps = {
    disabled?: boolean
    label: string,
    value: number,
    marks: Mark[]
    onChange: (event: Event, weightedSlider: WeightedSlider) => void
}

export type WeightedSlider = {
    index: number,
    value: number
}

//Use this when the options on the slider need to appear nonlinearly
export default function WeightedSliderSetting(props: SliderSettingProps) {
    const { disabled, label, value, marks, onChange } = { ...props }
    const min = marks[0].value
    const max = marks[marks.length - 1].value


    const innerOnChange = (event: Event, sliderValue: number | number[]) => {
        let inputVal: number = Array.isArray(sliderValue) ? sliderValue[0] : sliderValue
        const weightedSlider = roundSlider(inputVal, marks)
        onChange(event, weightedSlider)
    }

    const roundSlider = (val: number, marks: Mark[]): WeightedSlider => {
        const min = marks[0].value
        const maxIndex = marks.length - 1
        const max = marks[maxIndex].value

        if (val >= min && val <= max) {
            for (let i = 0; i < marks.length - 1; i++) {
                const current = marks[i].value
                const next = marks[i + 1].value
                const divider = (current + next + 1) / 2
                if (val < divider) {
                    return { index: i, value: marks[i].value }
                }
            }
            if (val <= max) {
                return { index: maxIndex, value: max }
            }
        }
        return { index: -1, value: -1 }
    }

    return (
        <>
            <Grid item xs={2}>
                <InputLabel>{label}</InputLabel>
            </Grid>
            <Grid item xs={6}>
                <Box px={4}>
                    <Slider disabled={disabled ?? false} marks={marks} min={min} max={max} value={value} size='small' onChange={innerOnChange} />
                </Box>
            </Grid>
        </>
    )
}
