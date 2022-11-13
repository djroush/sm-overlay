import { createCanvas, loadImage } from 'canvas';
import { takeLatest, put, all, call } from 'redux-saga/effects';

const trimEqualsRegExp = new RegExp("=*$");

function* loadLogo(logo: string) {
    //@ts-ignore
    const img: any = yield call(loadImage, `logos/${logo}.png`)
    const canvas = createCanvas(1280, 720);
    const context = canvas.getContext('2d')
    
    context.drawImage(img, 550, 55);
    //converting will export with extra === but when on import they need to be removed,
    //so remove them here before persisting in redux
    const layerData = canvas.toDataURL().replace(trimEqualsRegExp, "");
    context.clearRect(0, 0, 1280, 720)
    yield put({type: `PREVIEW/persist-logo`, value: layerData })
}

export function* workerLogo(action: any) {
    const logo = action.logo.toLowerCase()
    yield loadLogo(logo)
}

export default function* watchLogo() {
    yield takeLatest('LOGO/fetch-logo', workerLogo);
}