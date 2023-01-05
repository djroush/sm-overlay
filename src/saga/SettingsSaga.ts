import { CanvasRenderingContext2D, createCanvas } from 'canvas';
import { takeLatest, put, select, call, all } from 'redux-saga/effects';
import { modeValues, areaValues, difficultyValues, startValues, morphValues, escapeValues, bossesValues, themeValues } from '../model/SliderValues';
import { SettingsState } from '../redux/state/SettingsState';
import { RootState } from '../redux/state/RootState';
import { outlineText } from './PlayersSaga';

const trimEqualsRegExp = new RegExp("=*$");

function* drawSettings(settings: SettingsState, settingsY: number) {
    const canvas = createCanvas(220, 184);
    const context: CanvasRenderingContext2D = canvas.getContext('2d')
    const { theme, mode, area, difficulty, start, morph, escape, bosses } = settings

    //Draw Settings
    context.font = '16px sans-serif'
    context.fillStyle = '#FDF3FB';
    context.lineWidth = 2;
    context.strokeStyle = 'black'

    //FIXME: needs to translate themeValues here
    const themeValue = themeValues[theme]
    const modeValue = modeValues[mode]
    const areaValue = areaValues[area]
    const difficultyValue = difficultyValues[difficulty]
    const startValue = startValues[start]
    const morphValue = morphValues[morph]
    const escapeValue = escapeValues[escape]
    const bossesValue = bossesValues[bosses]

    const settingsText = [
      `MODE - ${modeValue}`,
      `AREA - ${areaValue}`,
      `DIFFICULTY - ${difficultyValue}`,
      `START - ${startValue}`,
      `MORPH - ${morphValue}`,
      `BOSSES - ${bossesValue}`,
      `ESCAPE - ${escapeValue}`
    ]
    yield all(settingsText.map((setting, index) =>
        call(outlineText, context, setting, 0, (25*(index+1)), canvas.width)
    ));

    // // creating an image can end the data URL with trailing equal signs.  these cause
    // // issues when using redrawing later, so remove them before persisting to redux
    const settingsData = canvas.toDataURL().replace(trimEqualsRegExp, "");
    context.clearRect(0, 0, canvas.width, canvas.height)

    yield put({ type: 'PREVIEW/persist-settings', value: settingsData })
}

export function* workerSettings() {
    const { settings, options } = yield select((state: RootState) => state)
    const { settingsY} = options
    yield drawSettings(settings, settingsY);
}

export default function* watchSettings() {
    yield takeLatest('SETTINGS/update-settings', workerSettings);
}