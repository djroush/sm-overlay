import { CanvasRenderingContext2D, createCanvas } from 'canvas';
import { put, select, throttle } from 'redux-saga/effects';
import { RootState } from '../redux/state/RootState';
import { PlayersState } from '../redux/state/PlayersState';
import { Color } from '@mui/material';
import internal from 'stream';

const trimEqualsRegExp = new RegExp("=*$");

function* drawPlayers(names: PlayersState) {
    const canvas = createCanvas(1280, 720);
    const context: CanvasRenderingContext2D = canvas.getContext('2d')
    const { player1, player2 } = names

    //Draw Names
    context.textAlign = 'center'
    context.font = '28px sans-serif'
    context.fillStyle = '#FDF3FB';
    yield outlineText(context, player1, 190, 69, 300);
    yield outlineText(context, player2, 925, 69, 300);

    // // creating an image can end the data URL with trailing equal signs.  these cause
    // // issues when using redrawing later, so remove them before persisting to redux
    const playersData = canvas.toDataURL().replace(trimEqualsRegExp, "");
    context.clearRect(0, 0, 1280, 720)

    yield put({ type: 'PREVIEW/persist-players', value: playersData })
}

export function* outlineText(context: CanvasRenderingContext2D, text: string, x: number, y: number, size: number) {
    const oldFillStyle = context.fillStyle;
    context.fillStyle = 'black';
    context.fillText(text, x-1, y-1, size);
    context.fillText(text, x-1, y, size);
    context.fillText(text, x-1, y+1, size);
    context.fillText(text, x, y+1, size);
    context.fillText(text, x+1, y+1, size);
    context.fillText(text, x+1, y, size);
    context.fillText(text, x+1, y-1, size);
    context.fillText(text, x, y-1, size);
    context.fillStyle = oldFillStyle;
    context.fillText(text, x, y, size);
}

export function* workerPlayers() {
    const { names } = yield select((state: RootState) => state)
    yield drawPlayers(names)
}

export default function* watchPlayers() {
    yield throttle(300, 'PLAYERS/update-players', workerPlayers);
}