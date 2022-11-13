import { CanvasRenderingContext2D, createCanvas } from 'canvas';
import { takeLatest, put, select } from 'redux-saga/effects';
import { RootState } from '../redux/state/RootState';
import { PlayersState } from '../redux/state/PlayersState';

const trimEqualsRegExp = new RegExp("=*$");

function* drawPlayers(names: PlayersState) {
    const canvas = createCanvas(1280, 720);
    const context: CanvasRenderingContext2D = canvas.getContext('2d')
    const { player1, player2 } = names

    //Draw Names
    context.textAlign = 'center'
    context.font = '28px sans-serif'
    context.fillStyle = '#FDF3FB';
    context.fillText(player1, 190, 69, 300);
    context.fillText(player2, 925, 69, 300);

    // // creating an image can end the data URL with trailing equal signs.  these cause
    // // issues when using redrawing later, so remove them before persisting to redux
    const playersData = canvas.toDataURL().replace(trimEqualsRegExp, "");
    context.clearRect(0, 0, 1280, 720)

    yield put({ type: 'PREVIEW/persist-players', value: playersData })
}

export function* workerPlayers() {
    const { names } = yield select((state: RootState) => state)
    yield drawPlayers(names)
}

export default function* watchPlayers() {
    yield takeLatest('PLAYERS/update-players', workerPlayers);
}