/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import LogoLoad from '../LogoLoad/LogoLoad';
import StepHeader from '../StepHeader';
import Input from './Input';

const Content = () => (
  <div className="Content mt-24">
    <div className="mini-container">
      <StepHeader count="3" main="Content" />
      <p className="text-sm font-normal">
        Edit your content
      </p>
      <Input />
      <Input />
      <Input />
      <Input />
      <LogoLoad header="Upload Image" />
    </div>
  </div>
);

export default Content;
