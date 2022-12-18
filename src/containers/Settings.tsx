
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import { RootState } from '../redux/state/RootState';
import { logoValues, themeValues } from '../model/SliderValues';
import SettingsComp, { SettingsProps } from '../components/Settings';

export default function Settings() {
    const { settings } = useSelector((state: RootState) => state)
    const { theme, logo, mode, area, difficulty, start, morph, escape, bosses} = settings

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type:'PREVIEW/clear-theme'})
        dispatch({type:'THEME/fetch-theme', theme: themeValues[theme-1]});
    }, [theme]);

    useEffect(() => { 
        dispatch({type:'LOGO/fetch-logo', logo: logoValues[logo-1]})
    }, [logo]);

    useEffect(() => {
        dispatch({type:'SETTINGS/update-settings'})
    }, [mode, area, difficulty, start, morph, escape, bosses])


    const changeTheme = (_: Event, value: number | number[]) => {
        dispatch({type: 'SETTINGS/change-theme', value })
    }
    const changeLogo = (_: Event, value: number | number[]) => {
        dispatch({type: 'SETTINGS/change-logo', value })
    }
    const changeMode = (_: Event, value: number | number[]) => {
        dispatch({type: 'SETTINGS/change-mode', value })
    }
    const changeArea = (_: Event, value: number | number[]) => {
        dispatch({type: 'SETTINGS/change-area', value })
    }
    const changeDifficulty = (_: Event, value: number | number[]) => {
        dispatch({type: 'SETTINGS/change-difficulty', value })
    }
    const changeStart = (_: Event, value: number | number[]) => {
        dispatch({type: 'SETTINGS/change-start', value })
    }
    const changeMorph = (_: Event, value: number | number[]) => {
        dispatch({type: 'SETTINGS/change-morph', value })
    }
    const changeBosses = (_: Event, value: number | number[]) => {
        dispatch({type: 'SETTINGS/change-bosses', value })
    }
    const changeEscape = (_: Event, value: number | number[]) => {
        dispatch({type: 'SETTINGS/change-escape', value })
    }

    const props: SettingsProps = {
        ...settings, 
        changeTheme, changeLogo, changeMode, changeArea, changeDifficulty, changeStart, changeMorph,
        changeBosses, changeEscape
    }

    return <SettingsComp {...props} />
}
