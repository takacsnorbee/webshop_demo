import * as actionTypes from './actionTypes';
import {
    IModal,
    AddModalAction,
    RemoveModalAction,
    ModalState,
} from './types';

const modalReducer = (
    state: ModalState = { modals: [] },
    action: AddModalAction | RemoveModalAction,
    )
     : ModalState => {
    switch (action.type) {
        case actionTypes.ADD_ALERT: {
            const lastId = state.modals.map((modal) => modal.id).sort().pop() || 0;

            if (typeof action.payload === 'string') {
                const newModal : IModal = {
                    id: lastId! + 1,
                    modalType: 'alert',
                    message: action.payload,
                };
                return { modals: [...state.modals, newModal] };
            }
            return state;
        }

        case actionTypes.ADD_INFO: {
            const lastId = state.modals.map((modal) => modal.id).sort().pop() || 0;

            if (typeof action.payload === 'string') {
                const newModal : IModal = {
                    id: lastId! + 1,
                    modalType: 'info',
                    message: action.payload,
                };
                return { modals: [...state.modals, newModal] };
            }
            return state;
        }

        case actionTypes.REMOVE_MODAL: {
            if (typeof action.payload === 'number') {
                const newStore = state.modals.filter((modal) => modal.id !== action.payload);
                return { modals: [...newStore] };
            }
            return state;
        }
        default:
            return state;
    }
};

export default modalReducer;
