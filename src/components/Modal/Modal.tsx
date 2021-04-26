import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal-backdrop"></div>
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </>,
    document.querySelector('#modal') as any,
  );
};

export default Modal;
