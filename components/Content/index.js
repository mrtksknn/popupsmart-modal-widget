/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import LogoLoad from '../LogoLoad/LogoLoad';
import Input from './Input';

const Content = () => (
  <div className="Content mt-24">
    <div className="container">
      <div className="flex items-center mb-8">
        {/* eslint-disable-next-line max-len */}
        <span className="step-header text-base font-semibold rounded-full flex items-center justify-center w-9 h-9 mr-4">
          3
        </span>
        <span className="text-lg font-semibold">
          Content
        </span>
      </div>
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
