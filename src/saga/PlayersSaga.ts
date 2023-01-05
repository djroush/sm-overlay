import { CanvasRenderingContext2D, createCanvas } from 'canvas';
import { delay, put, select, takeLatest } from 'redux-saga/effects';
import { RootState } from '../redux/state/RootState';
import { PlayersState } from '../redux/state/PlayersState';

const trimEqualsRegExp = new RegExp("=*$");

function* drawPlayers(names: PlayersState, leftAlignPlayers: boolean) {
    const canvas = createCanvas(1280, 720);
    const context: CanvasRenderingContext2D = canvas.getContext('2d')
    context.textAlign = 'center'
    context.font = '28px sans-serif'
    context.fillStyle = '#FDF3FB';
    context.lineWidth = 2;
    context.strokeStyle = 'black'

    //Draw Names
    const { player1, player2 } = names
    const player1Width = context.measureText(player1).width
    const player2Width = context.measureText(player2).width
    const p1Offset  = leftAlignPlayers ? (300-player1Width)/2 : 0
    const p2Offset  = leftAlignPlayers ? (300-player2Width)/2 : 0
 

    yield outlineText(context, player1, 186-p1Offset, 73, 300);
    yield outlineText(context, player2, 922-p2Offset, 73, 300);

    // // creating an image can end the data URL with trailing equal signs.  these cause
    // // issues when using redrawing later, so remove them before persisting to redux
    const playersData = canvas.toDataURL().replace(trimEqualsRegExp, "");
    context.clearRect(0, 0, 1280, 720)

    yield put({ type: 'PREVIEW/persist-players', value: playersData })
}

export function* outlineText(context: CanvasRenderingContext2D, text: string, x: number, y: number, size: number) {
    context.strokeText(text, x, y, size);
    context.fillText(text, x, y, size);
}

export function* workerPlayers() {
    yield delay(180)
    const { players, options } = yield select((state: RootState) => state)
    const { leftAlignPlayers } = options
    yield drawPlayers(players, leftAlignPlayers)
}

export default function* watchPlayers() {
    yield takeLatest('PLAYERS/update-players', workerPlayers);
}