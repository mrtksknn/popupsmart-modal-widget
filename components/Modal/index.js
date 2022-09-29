import React from 'react';
import Image from 'next/image';
import tempModal from '../../assets/Modals/modal.svg';

const Modal = () => (
  <div className="Modal">
    <Image
      alt="tempModal" height="400" src={tempModal}
      width="740"
    />
  </div>
);

export default Modal;
