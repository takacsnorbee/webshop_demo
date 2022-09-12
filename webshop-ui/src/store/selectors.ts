import { RootState } from '.';
import { LoaderState } from './loader/types';
import { ModalState } from './modal/types';
import { InitialProductI } from './products/reducer';
import { initialUISettingsI } from './userInterface/reducer';

export const getUserName = (state:RootState):string => state.user.username;
export const getUserEmail = (state:RootState):string => state.user.email;
export const getUserRole = (state:RootState):boolean => state.user.isAdmin;
export const getUserAvatar = (state:RootState):number => state.user.avatarId;
export const getProducts = (
  state: RootState,
):InitialProductI[] => state.products;
export const getCart = (state:RootState):number[] => state.cart;
export const isLoading = (state: RootState): LoaderState => state.loader;
export const getModals = (state: RootState): ModalState => state.modals;
export const getUISettings = (
  state: RootState,
): initialUISettingsI => state.uiSettings;
