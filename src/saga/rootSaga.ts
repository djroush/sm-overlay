import { spawn } from 'redux-saga/effects'
import watchInformation from './Information';
import watchTheme from './Theme';

export default function* rootSaga() {
    yield spawn(watchTheme);
    yield spawn(watchInformation);
}

