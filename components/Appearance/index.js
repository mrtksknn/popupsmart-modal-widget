/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import Colors from './Colors/Colors';
import StepHeader from '../StepHeader';
import LogoLoad from '../LogoLoad/LogoLoad';
import Position from './Position/Position';
import Modal from '../Modal';
import Size from './Size';

const Appearance = () => (
  <div className="Appearance flex justify-between mt-20">
    <div className="mini-container">
      <StepHeader count="2" main="Appearance" sub="(Size, colors, logo)" />
      <Size />
      <Position />
      <Colors />
      <LogoLoad header="Upload Logo" />
    </div>
    <Modal />
  </div>
);

export default Appearance;
