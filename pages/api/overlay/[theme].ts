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
  showPlayers: string,
  showLogo: string,
  showSettings: string,
  showTracker: string,
  showAvatar: string,
  showWins: string
}

const optionsValues: string[] = ['false', 'true'];

const getServerAssetPath = () => {
  const assetPathFolders = process.env.env !== 'prod' ? 
    ['..', '..', '..', '..', '..', 'public', 'overlays'] : 
    ['..', '..', '..', '..', 'overlays'] ;
  const serverAssetPath = path.join(__dirname, ...assetPathFolders)
  
  return serverAssetPath
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OverlayErrorResponse | any>,
) {

  if (req.method === 'GET') {
    const { theme, mode, area, difficulty, start, morph, bosses, escape, showPlayers, showLogo, showSettings, showTracker, showAvatar, showWins } = req.query ?? {}
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
      showPlayers: lower(showPlayers),
      showLogo: lower(showLogo),
      showSettings: lower(showSettings),
      showTracker: lower(showTracker),
      showAvatar: lower(showAvatar),
      showWins: lower(showWins)
    }

    const errors = validate(settings, options)
    if (errors.length > 0) {
      res.status(400).json({ errors })
    } else {
      const overlay = await generateOverlay(settings, options)
      res.status(200).send(overlay)
    }
  } else {
    res.setHeader('Allow', 'GET').status(405).json({errors:['Expected to receive a GET request']});
  }
}

//TODO: finish implementing this properly
function generateOverlay(settings: OverlaySettings, options: OverlayOptions): Promise<Buffer> {
  const serverAssetPath = getServerAssetPath();
  const bgImage = sharp(serverAssetPath + '/maridia-background.png')
    .toFormat('png')
    .sharpen({
      sigma: 0.01,
      m1: 0.01,
      m2: 0.01,
      x1: 0.01,
      y2: 0.01,
      y3: 0.01
    })
    .toBuffer()
  return bgImage
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
  Object.entries(options).forEach(([option, value]) => {
    if (option && !optionsValues.includes(value)) {
      errors.push(option + ' has an invalid value, valid values are (' + optionsValues.join(',') + ')');
    }
  })

  return errors;
}

function lower(input: string | string[] | undefined): string {
  if (input === undefined || input === null || input === '') {
    return 'true';
  } else if (Array.isArray(input)) {
    return input[0].toLowerCase();
  }
  return input.toLowerCase();
}

function upper(input: string | string[] | undefined): string {
  if (input === undefined) {
    return '';
  } else if (Array.isArray(input)) {
    return input[0].toUpperCase();
  }
  return input.toUpperCase();
}