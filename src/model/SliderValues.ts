import { createThemeMarks } from "../components/SliderThemeSetting";

export type Mark = {
    value: number,
    label: string
}

export const themeValues: string[] = ['CERES', 'CRATERIA', 'BRINSTAR', 'SHIP', 'MARIDIA', 'NORFAIR',  'TOURIAN'];
export const logoValues: string[] = ['DEFAULT', 'CHOOZO'];
export const modeValues: string[] = ['FULL', 'FULL COUNTDOWN', 'MAJOR MINOR', 'CHOZO'];
export const areaValues: string[] = ['VANILLA', 'LIGHT', 'FULL'];
export const difficultyValues: string[] = ['BASIC', 'EASY', 'MEDIUM', 'HARD', 'HARDEST'];
export const startValues: string[] = ['VANILLA', 'SHALLOW', 'MIDWAY', 'DEEP', 'RANDOM'];
export const morphValues: string[] = ['EARLY', 'LATE', 'RANDOM'];
export const bossesValues = ['VANILLA', 'RANDOM'];
export const escapeValues: string[] = ['VANILLA', 'RANDOM'];
export const avatarsValues: string[] = ['DEFAULT', 'EMPTY'];

const createMarks = (values: string[]): Mark[] => {
    return values.map((label, index) => { return { value: index, label } })
}

export const themeMarks: Mark[] = createThemeMarks(themeValues);
export const logoMarks: Mark[] = createMarks(logoValues);
export const modeMarks: Mark[] = createMarks(modeValues);
export const areaMarks: Mark[] = createMarks(areaValues);
export const difficultyMarks: Mark[] = createMarks(difficultyValues);
export const startMarks: Mark[] = createMarks(startValues);
export const morphMarks: Mark[] = createMarks(morphValues);
export const bossesMarks: Mark[] = createMarks(bossesValues);
export const escapeMarks: Mark[] = createMarks(escapeValues);
export const avatarsMarks: Mark[] = createMarks(avatarsValues);


