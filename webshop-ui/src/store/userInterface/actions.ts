import { SET_THEME, SET_FONT_SIZE, SET_LANGUAGE } from './types';

export type UISettingsAction =
    | {type: typeof SET_THEME; payload: string}
    | {type: typeof SET_FONT_SIZE; payload: string}
    | {type: typeof SET_LANGUAGE; payload: string}

export const setTheme = (payload:string):UISettingsAction => (
    { type: SET_THEME, payload }
);

export const setFontSize = (payload:string):UISettingsAction => (
    { type: SET_FONT_SIZE, payload }
);

export const setLanguage = (payload:string):UISettingsAction => (
    { type: SET_LANGUAGE, payload }
);
