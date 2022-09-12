export interface IModal {
    id: number
    modalType: 'alert' | 'info'
    message: IModalMessage
  }
export type IModalMessage = string

export type ModalState = {
    modals: IModal[]
  }
export type AddModalAction = {
    type: string
    payload: IModalMessage
  }
export type RemoveModalAction = {
  type: string,
  payload: number
}
