import React from 'react';
import Image from 'next/image';
import Check from '../../assets/others/check.png';

const BtnList = () => {
  const texts = [
    'Free and paid plans',
    'Setup in minutes',
    'No credit card required*'
  ];
  const listItems = texts.map(text => <li className="mr-4" key={text}>
    <Image
      alt="check"
      height="8.93" src={Check}
      width="11.73"
    />
    <span className="leading-4 font-normal text-sm mx-3">
      {text}
    </span>
    {/* eslint-disable-next-line react/jsx-closing-tag-location */}
  </li>);

  return (
    <div>
      <button className="primary-button rounded-xl w-fit my-10 px-7 py-5" type="button">
        Try it out now
      </button>
      <ul className="flex">
        {listItems}
      </ul>
    </div>
  );
};

export default BtnList;
