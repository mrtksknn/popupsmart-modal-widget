import React from 'react';
import Image from 'next/image';
import tempModal from '../../assets/Modals/modal.svg';

const Modal = () => (
  <div className="h-min flex flex-col items-center justify-center">
    <div className="mt-20 soon">
      <Image
        alt="tempModal" height="400" src={tempModal}
        width="740"
      />
    </div>
    <div className="comingSoon-text">
      <span className="text-4xl">
        Coming Soon
      </span>
    </div>
  </div>
);

export default Modal;
