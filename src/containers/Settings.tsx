
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import { RootState } from '../redux/state/RootState';
import { themeOptions } from '../model/SliderValues';
import SettingsComp, { SettingsProps } from '../components/Settings';

export default function Options() {
    const { settings } = useSelector((state: RootState) => state)
    const { theme, mode, area, difficulty, start, morph, escape, bosses, player1, player2} = settings

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type:'THEME/fetchRequest', theme: themeOptions[theme-1]});
    }, [theme]);

    useEffect(() => {
        dispatch({type:'INFO/watchInformation'})
    }, [mode, area, difficulty, start, morph, escape, bosses, player1, player2])

    const changeTheme = (_: Event, value: number | number[]) => {
        dispatch({ layer: 'REACT', type: 'SETTINGS/change-theme', value })
    }
    const changeMode = (_: Event, value: number | number[]) => {
        dispatch({ layer: 'REACT', type: 'SETTINGS/change-mode', value })
    }
    const changeArea = (_: Event, value: number | number[]) => {
        dispatch({ layer: 'REACT', type: 'SETTINGS/change-area', value })
    }
    const changeDifficulty = (_: Event, value: number | number[]) => {
        dispatch({ layer: 'REACT', type: 'SETTINGS/change-difficulty', value })
    }
    const changeStart = (_: Event, value: number | number[]) => {
        dispatch({ layer: 'REACT', type: 'SETTINGS/change-start', value })
    }
    const changeMorph = (_: Event, value: number | number[]) => {
        dispatch({ layer: 'REACT', type: 'SETTINGS/change-morph', value })
    }
    const changeBosses = (_: Event, value: number | number[]) => {
        dispatch({ layer: 'REACT', type: 'SETTINGS/change-bosses', value })
    }
    const changeEscape = (_: Event, value: number | number[]) => {
        dispatch({ layer: 'REACT', type: 'SETTINGS/change-escape', value })
    }
    const changePlayer1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ layer: 'REACT', type: 'SETTINGS/change-player1', value: event.target.value })
    }
    const changePlayer2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ layer: 'REACT', type: 'SETTINGS/change-player2', value: event.target.value })
    }

    const props: SettingsProps = {
        ...settings, 
        changeTheme, changeMode, changeArea, changeDifficulty, changeStart, changeMorph,
        changeBosses, changeEscape, changePlayer1, changePlayer2
    }

    return <SettingsComp {...props} />
}
