/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import Colors from './Colors/Colors';
import LogoLoad from '../LogoLoad/LogoLoad';
import Position from './Position/Position';
import Size from './Size';

const Appearance = () => (
  <div className="Appearance mt-24">
    <div className="container">
      <div className="flex items-center mb-8">
        {/* eslint-disable-next-line max-len */}
        <span className="step-header text-base font-semibold rounded-full flex items-center justify-center w-9 h-9 mr-4">
          2
        </span>
        <span className="text-lg font-semibold">
          Appearance
          <span className="font-normal ml-1">
            (Size, colors, logo)
          </span>
        </span>
      </div>
      <Size />
      <Position />
      <Colors />
      <LogoLoad header="Upload Logo" />
    </div>
  </div>
);

export default Appearance;
