
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import { RootState } from '../redux/state/RootState';
import { logoValues, themeValues } from '../model/SliderValues';
import SettingsComp, { SettingsProps } from '../components/Settings';
import { roundThemeSlider } from '../components/SliderThemeSetting';

export default function Settings() {
    const { settings, options } = useSelector((state: RootState) => state)
    const { theme, logo, mode, area, difficulty, start, morph, escape, bosses, avatars} = settings
    const { hideLogo, hideSettings, hideAvatar} = options

    const dispatch = useDispatch()

    useEffect(() => {
        if (theme !== undefined && theme !== null) {
            dispatch({type:'PREVIEW/clear-theme'})
            dispatch({type:'THEME/fetch-theme', theme: themeValues[theme]});    
        }
    }, [theme]);

    useEffect(() => { 
        dispatch({type:'LOGO/fetch-logo', logo: logoValues[logo]})
    }, [logo]);

    useEffect(() => {
        dispatch({type:'SETTINGS/update-settings'})
    }, [mode, area, difficulty, start, morph, escape, bosses, avatars])

    const changeTheme = (_: Event, value: number | number[]) => {
        let inputVal: number = Array.isArray(value) ? value[0] : value
        const themeState = roundThemeSlider(inputVal)
        dispatch({type: 'SETTINGS/change-theme', value: themeState})
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
    const changeAvatars = (_: Event, value: number | number[]) => {
        dispatch({type: 'SETTINGS/change-avatars', value })
    }
    const props: SettingsProps = {
        ...settings, hideLogo, hideSettings,hideAvatar,
        changeTheme, changeLogo, changeMode, changeArea, changeDifficulty, changeStart, changeMorph,
        changeBosses, changeEscape, changeAvatars
    }

    return <SettingsComp {...props} />
}
