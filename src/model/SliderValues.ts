export type Mark = {
    value: number,
    label: string
}

export const themeValues: string[] = ['MARIDIA', 'TOURIAN'];
export const modeValues: string[] = ['FULL', 'FULL COUNTDOWN', 'MAJOR MINOR', 'CHOZO'];
export const areaValues: string[] = ['VANILLA', 'LIGHT', 'FULL'];
export const difficultyValues: string[] = ['BASIC', 'EASY', 'MEDIUM', 'HARD', 'HARDEST'];
export const startValues: string[] = ['VANILLA', 'SHALLOW', 'MIDWAY', 'DEEP', 'RANDOM'];
export const morphValues: string[] = ['EARLY', 'LATE', 'RANDOM'];
export const bossesValues = ['VANILLA', 'RANDOM'];
export const escapeValues: string[] = ['VANILLA', 'RANDOM'];

const createMarks = (values: string[]): Mark[] => {
    return values.map((label, index) => { return { value: index + 1, label } })
}

export const themeMarks: Mark[] = createMarks(themeValues);
export const modeMarks: Mark[] = createMarks(modeValues);
export const areaMarks: Mark[] = createMarks(areaValues);
export const difficultyMarks: Mark[] = createMarks(difficultyValues);
export const startMarks: Mark[] = createMarks(startValues);
export const morphMarks: Mark[] = createMarks(morphValues);
export const bossesMarks = createMarks(bossesValues)
export const escapeMarks: Mark[] = createMarks(escapeValues);

