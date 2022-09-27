import React from 'react';
import Image from 'next/image';
import Comp from '../../assets/others/computer.svg';
import Phone from '../../assets/others/phone.svg';

const DeviceSelect = () => (
  <div className="Device flex w-full justify-between">
    <div className="bg-gray-200 flex items-center rounded-xl p-4 h-12 w-44">
      <input
        className="mr-2"
        readOnly
        type="checkbox"
      />
      <Image
        alt="computer" height="14"
        src={Comp}
        width="18"
      />
      <p className="text-base font-normal ml-1">
        Desktop
      </p>
    </div>
    <div className="bg-gray-200 flex items-center rounded-xl p-4 h-12 w-44">
      <input
        className="mr-3"
        readOnly
        type="checkbox"
      />
      <Image
        alt="mobile" height="16.5"
        src={Phone}
        width="10.5"
      />
      <p className="text-base font-normal ml-2">
        Mobile
      </p>
    </div>
  </div>
);

export default DeviceSelect;
