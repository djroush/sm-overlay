import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OptionsComp, { OptionsProps } from '../components/Options'
import { RootState } from '../redux/state/RootState';

export default function Options() {
    const { hidePlayers, hideLogo, hideSettings, hideWins, hideAvatar, hideTracker, leftAlignPlayers, logoY, settingsY } = 
        useSelector((state: RootState) => state.options)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type:'PLAYERS/update-players'})
    }, [leftAlignPlayers])

    useEffect(() => {
        dispatch({type: 'SETTINGS/update-settings'})
    }, [settingsY])

    const changeHidePlayers = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-hidePlayers', value: checked })
    }
    const changeHideLogo = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-hideLogo', value: checked })
    }
    const changeHideSettings = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-hideSettings', value: checked })
    }
    const changeHideTracker = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-hideTracker', value: checked })
    }
    const changeHideAvatar = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-hideAvatar', value: checked })
    }
    const changeHideWins = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-hideWins', value: checked })
    }
    const changeLeftAlignPlayers = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-leftAlignPlayers', value: checked })
    }
    const changeLogoY = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let value = Number(event.target.value)
        if (isNaN(value) || value < 0) {
            value = 0
        } else if (value > 640) {
            value = 640
        }
        dispatch({type: 'OPTIONS/change-logoY', value })
    }
    const changeSettingsY = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let value = Number(event.target.value)
        if (isNaN(value) || value < 0) {
            value = 0
        } else if (value > 530) {
            value = 530
        }
        dispatch({type: 'OPTIONS/change-settingsY', value })
    }


    const props: OptionsProps = {
        hidePlayers, hideLogo, hideSettings, hideWins, hideAvatar, hideTracker, leftAlignPlayers,
        logoY, settingsY, changeHidePlayers, changeHideLogo, changeHideSettings, changeHideTracker,
        changeHideAvatar, changeHideWins, changeLeftAlignPlayers, changeLogoY, changeSettingsY
    }

    return (
        <OptionsComp {...props} />
    )
}
