import { spawn } from 'redux-saga/effects'
import watchLogo from './LogoSaga';
import watchTheme from './ThemeSaga';
import watchPlayers from './PlayersSaga';
import watchSettings from './SettingsSaga';

export default function* rootSaga() {
    yield spawn(watchTheme);
    yield spawn(watchSettings);
    yield spawn(watchPlayers);
    yield spawn(watchLogo);
}

