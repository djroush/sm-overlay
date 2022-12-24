import { Canvas, Image, createCanvas, loadImage } from 'canvas';
import { takeLatest, put, all, call } from 'redux-saga/effects';

const trimEqualsRegExp = new RegExp("=*$");

type Location = {
    x: number, y: number, w: number, h: number
}

const backgroundLoc: Location = {x: 0,y: 0,w:1280,h:720}
const streamLoc: Location = {x:0,y:720,w:512,h:390}
const nameLoc: Location = {x:512,y:720,w:341,h:107}
const timerLoc: Location = {x:853,y:720,w:151,h:107}
const trackerLoc: Location = {x:512,y:827,w:210,h:204}
const avatarLoc: Location = {x:722,y:827,w:162,h:195}
const winsLoc: Location = {x:884,y:827,w:97,h:195}
const p1AvatarLoc: Location = {x:1004,y:720,w:162,h:195}
const p2AvatarLoc: Location = {x:1004,y:915,w:162,h:195}

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
|                                         |    340x108 name        |149x108 timer|   p1 avatar  |
|                                         |--------------------------------------|   161x195    |
|                512x390                  |    210x204      | avatar  | wins   | |   125x98 (i) |
|                stream                   |    tracker      | 162x195 | 96x195 | |______________|
|                                         |                 |         |        | |   p2 avatar  |
|                                         |------------------------------------- |   161x195    |
|                                         |                                      |   125x98 (i) |
|_________________________________________|     full image =  1280x1110          |______________|
*/
function* loadTheme (theme: string) {
    //@ts-ignore   To understand what this code is doing, see comments below
    const image: any = yield call(loadImage, `overlays/${theme}.png`)
    const backgroundCanvas = extractLayer(image, backgroundLoc);
    const streamCanvas = extractLayer(image, streamLoc);
    const nameCanvas = extractLayer(image, nameLoc);
    const timerCanvas = extractLayer(image, timerLoc);
    const trackerCanvas = extractLayer(image, trackerLoc);
    const avatarCanvas = extractLayer(image, avatarLoc);
    const winsCanvas = extractLayer(image, winsLoc);
    const avatar1Canvas = extractLayer(image, p1AvatarLoc);
    const avatar2Canvas = extractLayer(image, p2AvatarLoc);
    
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

    context.drawImage(avatarCanvas,  245, 491, avatarCanvas.width, avatarCanvas.height)
    context.drawImage(avatarCanvas, 867, 491, avatarCanvas.width, avatarCanvas.height)
    const avatars = canvas.toDataURL().replace(trimEqualsRegExp, "")
    context.clearRect(0, 0, canvas.width, canvas.height)
    
    context.drawImage(avatar1Canvas,  245, 491, avatar1Canvas.width, avatar1Canvas.height)
    context.drawImage(avatar2Canvas, 867, 491, avatar2Canvas.width, avatar2Canvas.height)
    const playerAvatars = canvas.toDataURL().replace(trimEqualsRegExp, "")
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.drawImage(winsCanvas,  431, 491, winsCanvas.width, winsCanvas.height)
    context.drawImage(winsCanvas, 753, 491, winsCanvas.width, winsCanvas.height)
    const wins = canvas.toDataURL().replace(trimEqualsRegExp, "")
        
    const loadedTheme = {
        background, streams, names, timers, trackers, avatars, playerAvatars, wins
    }
    yield all([
        put({type: 'PREVIEW/persist-theme', value: loadedTheme}),
        put({type: 'SETTINGS/update-settings'})
    ])
}

const extractLayer = (image: Image, location: Location) => {
    const {x,y,w,h} = location
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
