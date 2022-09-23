import Image from 'next/image';
import React from 'react';
import Check from '../../assets/others/check.png';

const Intro = () => {
  const numbers = [
    'Free and paid plans',
    'Setup in minutes',
    'No credit card required*'
  ];
  const listItems = numbers.map(text => <li className="mr-4" key={text}>
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
    <div className="Intro flex flex-col mt-14">
      <span className="font-medium text-7xl w-1/2">
        Simple modal card creator
      </span>
      <p className="text-3xl mt-5 mb-10">
        A utility-first CSS framework packed with classeslike flex,
        pt-4, text-center and rotate-90 that can becomposed to build
        any design, directly in your markup.
      </p>
      <button className="primary-button rounded-xl w-fit my-10 px-7 py-5" type="button">
        Try it out now
      </button>
      <ul className="flex">
        {listItems}
      </ul>
    </div>
  );
};

export default Intro;
