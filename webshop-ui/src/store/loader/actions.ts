import * as actionTypes from './actionTypes';
import { LoaderAction } from './types';

export function startLoading(): LoaderAction {
  return {
    type: actionTypes.START_LOADING,
  };
}

export function finishLoading(): LoaderAction {
  return {
    type: actionTypes.FINISH_LOADING,
  };
}
