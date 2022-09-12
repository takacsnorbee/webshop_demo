import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { IModal } from '../../../store/modal/types';
import { removeModal } from '../../../store/modal/actions';
import './Modal.css';

export default function ModalBox({ id, message, modalType }: IModal): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setTimeout(() => dispatch(removeModal(id)), 5000);

    return function cleanup() {
      clearInterval(interval);
    };
   }, []);

  const button = (
    <button
      type="button"
      onClick={
          () => dispatch(removeModal(id))
        }
    >
      OK
    </button>
);
    return (
      <div className={modalType === 'alert' ? 'modal-alert-body' : 'modal-info-body'}>
        {modalType === 'alert' ? `Error: ${message}` : message}
        {button}
      </div>
    );
}
