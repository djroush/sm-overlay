import { useDispatch, useSelector } from 'react-redux';
import OptionsComp, { OptionsProps } from '../components/Options'
import { RootState } from '../redux/state/RootState';

export default function Options() {
    const { hidePlayers, hideLogo, hideSettings, hideWins, hideAvatar, hideTracker } = useSelector((state: RootState) => state.options)
    const dispatch = useDispatch()

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

    const props: OptionsProps = {
        hidePlayers, hideLogo, hideSettings, hideWins, hideAvatar, hideTracker,
        changeHidePlayers: changeHidePlayers, changeHideLogo, changeHideSettings, changeHideTracker,
        changeHideAvatar, changeHideWins
    }

    return (
        <OptionsComp {...props} />
    )
}
