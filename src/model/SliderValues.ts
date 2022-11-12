export type Mark = {
    value: number,
    label: string
}

export const themeOptions: string[] = ['MARIDIA', 'TOURIAN'];
export const modeOptions: string[] = ['FULL', 'FULL COUNTDOWN', 'MAJOR MINOR', 'CHOZO'];
export const areaOptions: string[] = ['VANILLA', 'LIGHT', 'FULL'];
export const difficultyOptions: string[] = ['BASIC', 'EASY', 'MEDIUM', 'HARD', 'HARDEST'];
export const startOptions: string[] = ['VANILLA', 'SHALLOW', 'MIDWAY', 'DEEP', 'RANDOM'];
export const morphOptions: string[] = ['EARLY', 'LATE', 'RANDOM'];
export const bossesOptions = ['VANILLA', 'RANDOM'];
export const escapeOptions: string[] = ['VANILLA', 'RANDOM'];

const createMarks = (values: string[]): Mark[] => {
    return values.map((label, index) => { return { value: index + 1, label } })
}

export const themeMarks: Mark[] = createMarks(themeOptions);
export const modeMarks: Mark[] = createMarks(modeOptions);
export const areaMarks: Mark[] = createMarks(areaOptions);
export const difficultyMarks: Mark[] = createMarks(difficultyOptions);
export const startMarks: Mark[] = createMarks(startOptions);
export const morphMarks: Mark[] = createMarks(morphOptions);
export const bossesMarks = createMarks(bossesOptions)
export const escapeMarks: Mark[] = createMarks(escapeOptions);

