import * as actionTypes from './actionTypes';
import { AddModalAction, RemoveModalAction, IModalMessage } from './types';

export function addAlert(message: IModalMessage): AddModalAction {
  return {
    type: actionTypes.ADD_ALERT,
    payload: message,
  };
}

export function addInfo(message: IModalMessage): AddModalAction {
  return {
    type: actionTypes.ADD_INFO,
    payload: message,
  };
}

export function removeModal(modalId: number): RemoveModalAction {
  return {
    type: actionTypes.REMOVE_MODAL,
    payload: modalId,
  };
}
