import { Canvas, Image, createCanvas, loadImage } from 'canvas';
import { takeLatest, put, all, call } from 'redux-saga/effects';

const trimEqualsRegExp = new RegExp("=*$");

function* loadTheme (theme: string) {
    //@ts-ignore   To understand what this code is doing, see comments below
    const image: any = yield call(loadImage, `overlays/${theme}.png`)
    const backgroundCanvas = extractLayer(image, 0, 0, 1280, 720);
    const streamCanvas = extractLayer(image, 0, 720, 511, 391);
    const nameCanvas = extractLayer(image, 511, 720, 342, 105);
    const timerCanvas = extractLayer(image, 853, 720, 149, 105);
    const trackerCanvas = extractLayer(image, 512, 827, 211, 202);
    const avatar1Canvas = extractLayer(image, 721, 827, 162, 195);
    const avatar2Canvas = extractLayer(image, 883, 827, 162, 195);
    const winsCanvas = extractLayer(image, 1047, 827, 96, 193);
    
    const canvas: Canvas = createCanvas(1280, 720)
    const context = canvas.getContext('2d')

    const background = backgroundCanvas.toDataURL().replace(trimEqualsRegExp, "")
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.drawImage(streamCanvas,  15, 116, streamCanvas.width, streamCanvas.height)
    context.drawImage(streamCanvas, 751, 116, streamCanvas.width, streamCanvas.height)
    const streams = canvas.toDataURL().replace(trimEqualsRegExp, "")
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.drawImage(nameCanvas,  15, 25, nameCanvas.width, nameCanvas.height)
    context.drawImage(nameCanvas, 751, 25, nameCanvas.width, nameCanvas.height)
    const names = canvas.toDataURL().replace(trimEqualsRegExp, "")
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.drawImage(timerCanvas,  377, 25, timerCanvas.width, timerCanvas.height)
    context.drawImage(timerCanvas, 1113, 25, timerCanvas.width, timerCanvas.height)
    const timers = canvas.toDataURL().replace(trimEqualsRegExp, "")
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.drawImage(trackerCanvas,  15, 491, trackerCanvas.width, trackerCanvas.height)
    context.drawImage(trackerCanvas, 1053, 491, trackerCanvas.width, trackerCanvas.height)
    const trackers = canvas.toDataURL().replace(trimEqualsRegExp, "")
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.drawImage(avatar1Canvas,  245, 491, avatar1Canvas.width, avatar1Canvas.height)
    context.drawImage(avatar2Canvas, 867, 491, avatar2Canvas.width, avatar2Canvas.height)
    const avatars = canvas.toDataURL().replace(trimEqualsRegExp, "")
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.drawImage(winsCanvas,  431, 491, winsCanvas.width, winsCanvas.height)
    context.drawImage(winsCanvas, 753, 491, winsCanvas.width, winsCanvas.height)
    const wins = canvas.toDataURL().replace(trimEqualsRegExp, "")
        
    const loadedTheme = {
        background, streams, names, timers, trackers, avatars, wins
    }
    yield all([
        put({type: 'PREVIEW/persist-theme', value: loadedTheme}),
        put({type: 'SETTINGS/update-settings'})
    ])
}

const extractLayer = (image: Image, x: number, y: number, w: number, h: number) => {
    const canvas: Canvas = createCanvas(w, h);
    const context = canvas.getContext('2d')
    context.drawImage(image, x, y, w, h, 0, 0, w, h)
    return canvas;
}

export function* workerTheme(action: any) {
    const theme = action.theme.toLowerCase()
    yield loadTheme(theme)
}

export default function* watchTheme() {
    yield takeLatest('THEME/fetch-theme', workerTheme);
}
/* All layers are merged into a single image to simplify the loading and to be more efficient.  The image is composed like this:
---------------------------------------------------------------------------------------------------------
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                               background                                              |
|                                                1280x720                                               |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
|                                                                                                       |
---------------------------------------------------------------------------------------------------------
|                                         |    338x105 name           | 147x105 timer |
|                                         |---------------------------------------------
|                507x387                  |    206x202      | avatar1 | avatar2 | wins |
|                stream                   |    tracker      | 158x193 | 158x193 |92x193|
|                                         |                 |         |         |      |
|                                         |---------------------------------------------
|                                         |
-------------------------------------------
*/
