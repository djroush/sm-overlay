// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ParsedUrlQuery } from 'querystring';
import { areaOptions, bossesOptions, difficultyOptions, escapeOptions, modeOptions, morphOptions, startOptions, themeOptions } from '../../../src/model/SliderValues';

type OverlayResponse = {
  valid: boolean
}

type OverlayErrorResponse = {
  errors: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OverlayResponse|OverlayErrorResponse|string>,
) {
  
  if (req.method === 'GET') {
    console.log("Query string: " + JSON.stringify(req.query))
    const errors = validateQueryParams(req.query ?? {})
    if (errors.length > 0) {
      res.status(400).json({errors})
    } else {
      res.status(200).json({valid:true})
    }
  } else {
    res.setHeader('Allow', 'GET').status(405).send('Expected to receive a GET request');
  }
}

const validOptions = ['true','false'];
function validateQueryParams(query: ParsedUrlQuery): string[] {
  const {theme, mode, area, difficulty, start, morph, bosses, escape,
    showPlayers, showLogo, showSettings, showTracker, showAvatar, showWins} = query
  const errors: string[] = []
  const options = [showPlayers, showLogo, showSettings, showTracker, showAvatar, showWins];

  if (!('theme' in query) || !themeOptions.includes(upper(theme))) {
    errors.push('theme is required, valid options are (' + themeOptions.join(',') + ')');
  };
  if (!('mode' in query) || !modeOptions.includes(upper(mode))) {
    errors.push('mode is required, valid options are (' + modeOptions.join(',') + ')');
  }
  if (!('area' in query) || !areaOptions.includes(upper(area))) {
    errors.push('area is required, valid options are (' + areaOptions.join(',') + ')');
  }
  if (!('difficulty' in query) || !difficultyOptions.includes(upper(difficulty))) {
    errors.push('difficulty is required, valid options are (' + difficultyOptions.join(',') + ')');
  }
  if (!('start' in query) || !startOptions.includes(upper(start))) {
    errors.push('start is required, valid options are (' + startOptions.join(',') + ')');
  }
  if (!('morph' in query) || !morphOptions.includes(upper(morph))) {
    errors.push('morph is required, valid options are (' + morphOptions.join(',') + ')');
  }
  if (!('bosses' in query) || !bossesOptions.includes(upper(bosses))) {
    errors.push('bosses is required, valid options are (' + bossesOptions.join(',') + ')');
  }
  if (!('escape' in query) || !escapeOptions.includes(upper(escape))) {
    errors.push('escape is required, valid options are (' + escapeOptions.join(',') + ')');
  }
  options.forEach(option => {
    if (option !== undefined && validOptions.includes(lower(option))) {
      errors.push('')
    }
  })
 
  return errors;
}

function lower(input: string|string[]|undefined): string {
  if (input === undefined) {
    return '';
  } else if (Array.isArray(input)) {
    return input[0].toLowerCase();
  }
  return input.toLowerCase();
}

function upper(input: string|string[]|undefined): string {
  if (input === undefined) {
    return '';
  } else if (Array.isArray(input)) {
    return input[0].toUpperCase();
  }
  return input.toUpperCase();
}