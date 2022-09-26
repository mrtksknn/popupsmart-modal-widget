import React from 'react';
import Headers from './Headers';
import BtnList from './BtnList';

const Intro = () => (
  <div className="Intro flex flex-col mt-14">
    <Headers />
    <BtnList />
    <div className="flex justify-end w-full">
      <div className="back-rectangle" />
    </div>
  </div>
);

export default Intro;
