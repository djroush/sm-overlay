import { Canvas, CanvasRenderingContext2D, createCanvas } from 'canvas';
import { takeLatest, put, select } from 'redux-saga/effects';
import { modeOptions, areaOptions, difficultyOptions, startOptions, morphOptions, escapeOptions, bossesOptions } from '../model/SliderValues';
import { SettingsState } from '../redux/state/SettingsState';
import { RootState } from '../redux/state/RootState';
import { OptionsState } from '../redux/state/OptionsState';

const trimEqualsRegExp = new RegExp("=*$");

function* drawInformation(canvas: Canvas, settingsState: SettingsState, optionsState: OptionsState) {
    const context: CanvasRenderingContext2D = canvas.getContext('2d')
    const { player1, player2, mode, area, difficulty, start, morph, escape, bosses } = settingsState
    const {  hideNames, hideLogo, hideSettings } = optionsState
    
    if (!hideNames) {
        context.textAlign = 'center'
        context.font = '28px sans-serif'
        context.fillStyle = '#F9E1F4';
        context.fillText(player1, 190, 69, 300);
        context.fillText(player2, 925, 69, 300);    
    }

    //Draw Settings
    if (!hideSettings) {
        context.textAlign = 'center'
        context.font = 'bold 20px sans-serif'
        context.fillStyle = '#F9E1F4';
        context.fillText(`SETTINGS`, 644, 180, 220);
    
        context.textAlign = 'left'
        context.font = '16px sans-serif'
    
        const modeValue = modeOptions[mode - 1]
        const areaValue = areaOptions[area - 1]
        const difficultyValue = difficultyOptions[difficulty - 1]
        const startValue = startOptions[start - 1]
        const morphValue = morphOptions[morph - 1]
        const escapeValue = escapeOptions[escape - 1]
        const bossesValue = bossesOptions[bosses - 1]
    
        context.fillText(`MODE - ${modeValue}`, 534, 210, 220);
        context.fillText(`AREA - ${areaValue}`, 534, 240, 220);
        context.fillText(`DIFFICULTY - ${difficultyValue}`, 534, 270, 220);
        context.fillText(`START -  ${startValue}`, 534, 300, 220);
        context.fillText(`MORPH - ${morphValue}`, 534, 330, 220);
        context.fillText(`BOSSES - ${bossesValue}`, 534, 360, 220);
        context.fillText(`ESCAPE - ${escapeValue}`, 534, 390, 220);    
    }
    return context;
}

export function* workerInformation() {
    const { settings, options } = yield select((state: RootState) => state)

    const canvas = createCanvas(1280, 720);
    const context: CanvasRenderingContext2D = yield drawInformation(canvas, settings, options);

    // // creating an image can end the data URL with trailing equal signs.  these cause
    // // issues when using redrawing later, so remove them before persisting to redux
    const infoData = canvas.toDataURL().replace(trimEqualsRegExp, "");
    context.clearRect(0, 0, 1280, 720)

    yield put({ layer: 'REACT', type: 'PREVIEW/persist-information', value: infoData })
}

export default function* watchInformation() {
    yield takeLatest('INFO/watchInformation', workerInformation);
}