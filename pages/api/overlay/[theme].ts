// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { areaValues, bossesValues, difficultyValues, escapeValues, modeValues, morphValues, startValues, themeValues } from '../../../src/model/SliderValues';
import path from 'path'
import sharp from 'sharp'

type OverlayErrorResponse = {
  errors: string[]
}

type OverlaySettings = {
  theme: string,
  mode: string,
  area: string,
  difficulty: string,
  start: string,
  morph: string,
  bosses: string,
  escape: string
}
type OverlayOptions = {
  hidePlayers: boolean,
  hideLogo: boolean,
  hideSettings: boolean,
  hideTracker: boolean,
  hideAvatar: boolean,
  hideWins: boolean
}

const getServerAssetPath = () => {
  const assetPathFolders = process.env.env !== 'prod' ?
    ['..', '..', '..', '..', '..', 'public'] :
    ['..', '..', '..', '..'];
  const serverAssetPath = path.join(__dirname, ...assetPathFolders)

  return serverAssetPath
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OverlayErrorResponse | any>,
) {

  if (req.method === 'GET') {
    const { theme, mode, area, difficulty, start, morph, bosses, escape, hidePlayers, hideLogo, hideSettings, hideTracker, hideAvatar, hideWins } = req.query ?? {}
    let settings = {
      theme: upper(theme),
      mode: upper(mode),
      area: upper(area),
      difficulty: upper(difficulty),
      start: upper(start),
      morph: upper(morph),
      bosses: upper(bosses),
      escape: upper(escape)
    }
    let options = {
      hidePlayers: lower(hidePlayers),
      hideLogo: lower(hideLogo),
      hideSettings: lower(hideSettings),
      hideTracker: lower(hideTracker),
      hideAvatar: lower(hideAvatar),
      hideWins: lower(hideWins)
    }

    const errors = validate(settings, options)
    if (errors.length > 0) {
      res.status(400).json({ errors })
    } else {
      const overlay = await generateOverlay(settings, options)
      res.status(200).send(overlay)
    }
  } else {
    res.setHeader('Allow', 'GET').status(405).json({ errors: ['Expected to receive a GET request'] });
  }
}


//TODO: finish implementing this properly
async function generateOverlay(settings: OverlaySettings, options: OverlayOptions): Promise<Buffer> {
  const { hidePlayers, hideLogo, hideSettings, hideTracker, hideAvatar, hideWins } = options

  const serverAssetPath = getServerAssetPath();
  const themeLayer = sharp(serverAssetPath + '/overlays/maridia.png')

  const backgroundLayer = await extractLayer(themeLayer, 0, 0, 1280, 720);
  const streamLayer = await extractLayer(themeLayer.clone(), 0, 720, 511, 390).toBuffer();
  const nameLayer = await extractLayer(themeLayer, 511, 720, 342, 105).toBuffer();
  const timerLayer = await extractLayer(themeLayer, 853, 720, 149, 105).toBuffer();
  const trackerLayer = await extractLayer(themeLayer, 512, 827, 211, 202).toBuffer();
  const avatar1Layer = await extractLayer(themeLayer, 721, 827, 162, 195).toBuffer();
  const avatar2Layer = await extractLayer(themeLayer, 883, 827, 162, 195).toBuffer();
  const winsLayer = await extractLayer(themeLayer, 1047, 827, 96, 193).toBuffer();

  let overlayLayers = [
    { input: streamLayer, left: 15, top: 116 },
    { input: streamLayer, left: 751, top: 116 },
    { input: nameLayer, left: 15, top: 25 },
    { input: nameLayer, left: 751, top: 25 },
    { input: timerLayer, left: 377, top: 25 },
    { input: timerLayer, left: 1113, top: 25 }
  ]
  if (!hideTracker) {
    overlayLayers = overlayLayers.concat([
      { input: trackerLayer, left: 15, top: 491 },
      { input: trackerLayer, left: 1053, top: 491 },
    ])
  }
  if (!hideAvatar) {
    overlayLayers = overlayLayers.concat([
      { input: avatar1Layer, left: 245, top: 491 },
      { input: avatar2Layer, left: 867, top: 491 },
    ])
  }
  if (!hideWins) {
    overlayLayers = overlayLayers.concat([
      { input: winsLayer, left: 431, top: 491 },
      { input: winsLayer, left: 753, top: 491 }
    ])
  }
  if (!hidePlayers) {
      //TODO: finish implementing this
  //add playersLayer


  }
  if (!hideLogo) {
    const logoLayer = await sharp(serverAssetPath + '/logos/default.png').toBuffer()

    overlayLayers = overlayLayers.concat([
      { input: logoLayer, left: 550, top: 80 }
    ])
  }
  if (!hideSettings) {
    //TODO: finish implementing this
    const settingsLayer = await generateSettings(settings)    

  }
  const overlay = backgroundLayer
    .composite(overlayLayers)

  return overlay.toBuffer()
}

const extractLayer = (image: sharp.Sharp, x: number, y: number, w: number, h: number) => {
  return image
    .clone()
    .extract({
      left: x,
      top: y,
      width: w,
      height: h
    })
}

const generateSettings = (settings: OverlaySettings) => {
  const { mode, area, difficulty, start, morph, bosses, escape, theme } = settings
  const settingsText = [
    `MODE - ${mode}`,
    `AREA - ${area}`,
    `DIFFICULTY - ${difficulty}`,
    `START -  ${start}`,
    `MORPH - ${morph}`,
    `BOSSES - ${bosses}`,
    `ESCAPE - ${escape}`
  ]

  //Add a space so you don't write over the background on the TOURIAN theme
  if (theme === 'TOURIAN') {
    settingsText.splice(2, 0, '');
  }
  let settingsHeight = 190;
  //TODO: figure out how to do this with sharp / pango 
  // yield all(settingsText.map((setting, index) =>
  //     call(outlineText, context, setting, 534, settingsHeight + (25*index), 220)
  // ));

}

function validate(settings: OverlaySettings, options: OverlayOptions): string[] {
  const { theme, mode, area, difficulty, start, morph, bosses, escape } = settings

  const errors: string[] = []

  if (theme === undefined || !themeValues.includes(upper(theme))) {
    errors.push('theme is required, valid values are (' + themeValues.join(',') + ')');
  };
  if (mode === undefined || !modeValues.includes(upper(mode))) {
    errors.push('mode is required, valid values are (' + modeValues.join(',') + ')');
  }
  if (!('area' in settings) || !areaValues.includes(upper(area))) {
    errors.push('area is required, valid values are (' + areaValues.join(',') + ')');
  }
  if (!('difficulty' in settings) || !difficultyValues.includes(upper(difficulty))) {
    errors.push('difficulty is required, valid values are (' + difficultyValues.join(',') + ')');
  }
  if (!('start' in settings) || !startValues.includes(upper(start))) {
    errors.push('start is required, valid values are (' + startValues.join(',') + ')');
  }
  if (!('morph' in settings) || !morphValues.includes(upper(morph))) {
    errors.push('morph is required, valid values are (' + morphValues.join(',') + ')');
  }
  if (!('bosses' in settings) || !bossesValues.includes(upper(bosses))) {
    errors.push('bosses is required, valid values are (' + bossesValues.join(',') + ')');
  }
  if (!('escape' in settings) || !escapeValues.includes(upper(escape))) {
    errors.push('escape is required, valid values are (' + escapeValues.join(',') + ')');
  }

  return errors;
}

function lower(input: string | string[] | undefined): boolean {
  if (input === undefined || input === null || input === '') {
    return false;
  } else if (Array.isArray(input)) {
    input = input[0]
  }
  return input?.toLowerCase() !== 'false';
}

function upper(input: string | string[] | undefined): string {
  if (input === undefined) {
    return '';
  } else if (Array.isArray(input)) {
    return input[0].toUpperCase();
  }
  return input.toUpperCase();
}