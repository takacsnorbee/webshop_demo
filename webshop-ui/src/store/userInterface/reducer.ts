import { UISettingsAction } from './actions';
import { SET_FONT_SIZE, SET_LANGUAGE, SET_THEME } from './types';

export interface initialUISettingsI {
    fontSize: string,
    language: string,
    theme: string,
}

export const initialUISettings = {
    fontSize: 'normal',
    language: 'eng',
    theme: 'normal',
};

const UIReducer = (
    state:initialUISettingsI,
    action:UISettingsAction,
):initialUISettingsI => {
    switch (action.type) {
        case SET_FONT_SIZE:
            return { ...state, fontSize: action.payload };
            break;
        case SET_LANGUAGE:
            return { ...state, language: action.payload };
            break;
        case SET_THEME:
            return { ...state, theme: action.payload };
            break;
        default:
            return initialUISettings;
            break;
    }
};

export default UIReducer;
