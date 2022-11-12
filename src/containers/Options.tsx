import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OptionsComp, { OptionsProps } from '../components/Options'
import { RootState } from '../redux/state/RootState';

export default function Options() {
    const { hideNames, hideLogo, hideSettings, showWins, showAvatar, showTracker } = useSelector((state: RootState) => state.options)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'INFO/watchInformation' })
    }, [hideNames, hideLogo, hideSettings, showWins, showAvatar, showTracker]);

    const changeHideNames = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({ layer: 'REACT', type: 'OPTIONS/change-hideNames', value: checked })
    }
    const changeHideLogo = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({ layer: 'REACT', type: 'OPTIONS/change-hideLogo', value: checked })
    }
    const changeHideSettings = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({ layer: 'REACT', type: 'OPTIONS/change-hideSettings', value: checked })
    }

    const changeShowTracker = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({ layer: 'REACT', type: 'OPTIONS/change-showTracker', value: checked })
    }
    const changeShowAvatar = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({ layer: 'REACT', type: 'OPTIONS/change-showAvatar', value: checked })
    }
    const changeShowWins = (_: React.SyntheticEvent, checked: boolean) => {
        dispatch({ layer: 'REACT', type: 'OPTIONS/change-showWins', value: checked })
    }

    const props: OptionsProps = {
        hideNames, hideLogo, hideSettings, showWins, showAvatar, showTracker,
        changeHideNames, changeHideLogo, changeHideSettings, changeShowTracker,
        changeShowAvatar, changeShowWins
    }

    return (
        <OptionsComp {...props} />
    )
}
