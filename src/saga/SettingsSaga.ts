import { CanvasRenderingContext2D, createCanvas } from 'canvas';
import { takeLatest, put, select, call, all } from 'redux-saga/effects';
import { modeValues, areaValues, difficultyValues, startValues, morphValues, escapeValues, bossesValues, themeValues } from '../model/SliderValues';
import { SettingsState } from '../redux/state/SettingsState';
import { RootState } from '../redux/state/RootState';
import { outlineText } from './PlayersSaga';
import { getThemeSliderIndex } from '../components/SliderThemeSetting';

const trimEqualsRegExp = new RegExp("=*$");

function* drawSettings(settings: SettingsState) {
    const canvas = createCanvas(1280, 720);
    const context: CanvasRenderingContext2D = canvas.getContext('2d')
    const { theme, mode, area, difficulty, start, morph, escape, bosses } = settings

    //Draw Settings
    context.font = '16px sans-serif'
    context.fillStyle = '#FDF3FB';
    context.lineWidth = 2;
    context.strokeStyle = 'black'

    //FIXME: needs to translate themeValues here
    const themeIndex = getThemeSliderIndex(theme)
    const themeValue = themeValues[themeIndex-1]
    const modeValue = modeValues[mode - 1]
    const areaValue = areaValues[area - 1]
    const difficultyValue = difficultyValues[difficulty - 1]
    const startValue = startValues[start - 1]
    const morphValue = morphValues[morph - 1]
    const escapeValue = escapeValues[escape - 1]
    const bossesValue = bossesValues[bosses - 1]

    const settingsText = [
      `MODE - ${modeValue}`,
      `AREA - ${areaValue}`,
      `DIFFICULTY - ${difficultyValue}`,
      `START - ${startValue}`,
      `MORPH - ${morphValue}`,
      `BOSSES - ${bossesValue}`,
      `ESCAPE - ${escapeValue}`
    ]

    //Add a space so you don't write over the background on the TOURIAN theme
    if  (themeValue === 'TOURIAN') {
        settingsText.splice(2, 0, '');
    }
    let settingsHeight = 190;
    yield all(settingsText.map((setting, index) =>
        call(outlineText, context, setting, 534, settingsHeight + (25*index), 220)
    ));

    // // creating an image can end the data URL with trailing equal signs.  these cause
    // // issues when using redrawing later, so remove them before persisting to redux
    const settingsData = canvas.toDataURL().replace(trimEqualsRegExp, "");
    context.clearRect(0, 0, 1280, 720)

    yield put({ type: 'PREVIEW/persist-settings', value: settingsData })
}

export function* workerSettings() {
    const { settings } = yield select((state: RootState) => state)
    yield drawSettings(settings);
}

export default function* watchSettings() {
    yield takeLatest('SETTINGS/update-settings', workerSettings);
}