import * as actionTypes from './actionTypes';
import { LoaderAction, LoaderState } from './types';

const loaderReducer = (
    state: LoaderState = false,
    action: LoaderAction,
)
    : LoaderState => {
    switch (action.type) {
        case actionTypes.START_LOADING:
            return true;

        case actionTypes.FINISH_LOADING:
            return false;
        default:
            return state;
    }
};

export default loaderReducer;
