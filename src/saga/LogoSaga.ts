import { createCanvas, loadImage } from 'canvas';
import { takeLatest, put, call, select, all } from 'redux-saga/effects';
import { RootState } from '../redux/state/RootState';

const trimEqualsRegExp = new RegExp("=*$");

function* loadLogo(logo: string, logoY: number) {
    //@ts-ignore
    const img: any = yield call(loadImage, `logos/${logo.toLowerCase()}.png`)
    const canvas = createCanvas(220, 89);
    const context = canvas.getContext('2d')
    context.drawImage(img, 0, 0)    
    //converting will export with extra === but when on import they need to be removed,
    //so remove them here before persisting in redux
    const layerData = canvas.toDataURL().replace(trimEqualsRegExp, "");
    yield all([
        put({type: 'PREVIEW/persist-logo', value: layerData }),
    ])
}

export function* workerLogo(action: any) {
    const {logoY} = yield select((state: RootState) => state.options)
    const logo = action.logo.toLowerCase()
    yield loadLogo(logo, logoY)
}

export default function* watchLogo() {
    yield takeLatest('LOGO/fetch-logo', workerLogo);
}