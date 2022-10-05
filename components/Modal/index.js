import React from 'react';
import Image from 'next/image';
import tempModal from '../../assets/Modals/modal.svg';

const Modal = () => (
  <div className="mt-20">
    <Image
      alt="tempModal" height="400" src={tempModal}
      width="740"
    />
  </div>
);

export default Modal;
