import { useDispatch, useSelector } from 'react-redux';
import OptionsComp, { OptionsProps } from '../components/Options'
import { RootState } from '../redux/state/RootState';

export default function Options() {
    const { showPlayers, showLogo, showSettings, showWins, showAvatar, showTracker } = useSelector((state: RootState) => state.options)
    const dispatch = useDispatch()

    const changeShowPlayers = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-showPlayers', value: checked })
    }
    const changeShowLogo = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-showLogo', value: checked })
    }
    const changeShowSettings = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-showSettings', value: checked })
    }

    const changeShowTracker = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-showTracker', value: checked })
    }
    const changeShowAvatar = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-showAvatar', value: checked })
    }
    const changeShowWins = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({type: 'OPTIONS/change-showWins', value: checked })
    }

    const props: OptionsProps = {
        showPlayers, showLogo, showSettings, showWins, showAvatar, showTracker,
        changeShowPlayers: changeShowPlayers, changeShowLogo, changeShowSettings, changeShowTracker,
        changeShowAvatar, changeShowWins
    }

    return (
        <OptionsComp {...props} />
    )
}
