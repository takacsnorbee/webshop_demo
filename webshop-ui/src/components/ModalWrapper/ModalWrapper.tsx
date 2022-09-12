import { useSelector, shallowEqual } from 'react-redux';
import { ModalState, IModal } from '../../store/modal/types';
import { getModals } from '../../store/selectors';
import ModalBox from './Modal/Modal';
import './ModalWrapper.css';

export default function ModalWrapper(): JSX.Element {
// eslint-disable-next-line max-len
const modalStore: ModalState = useSelector(getModals);
    return (
      <div className="modal-wrapper-body">
        {modalStore.modals.map((modal) => <ModalBox key={modal.id} id={modal.id} modalType={modal.modalType} message={modal.message} />)}
      </div>
    );
}
