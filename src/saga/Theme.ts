import { createCanvas, loadImage } from 'canvas';
import { takeLatest, put, all, call } from 'redux-saga/effects';

const trimEqualsRegExp = new RegExp("=*$");

function* loadLayer (theme: string, layer: string) {
    //@ts-ignore
    const img: any = yield call(loadImage, `overlays/${theme}-${layer}.png`)
    const canvas = createCanvas(1280, 720);
    const context = canvas.getContext('2d')
    
    context.drawImage(img, 0, 0);
    //converting will export with extra === but when on import they need to be removed,
    //so remove them here before persisting in redux
    const layerData = canvas.toDataURL();
    const trimmedData = layerData.replace(trimEqualsRegExp, "");
    context.clearRect(0, 0, 1280, 720)
    yield put({ layer: 'REACT', type: `PREVIEW/persist-${layer}`, value: trimmedData })
}

export function* workerTheme(action: any) {
    const theme = action.theme.toLowerCase()
    yield all([
        loadLayer(theme, 'background'),
        loadLayer(theme, 'streams'),
        loadLayer(theme, 'names'),
        loadLayer(theme, 'timers'),
        loadLayer(theme, 'trackers'),
        loadLayer(theme, 'avatars'),
        loadLayer(theme, 'wins')
    ])
}

export default function* watchTheme() {
    yield takeLatest('THEME/fetchRequest', workerTheme);
}