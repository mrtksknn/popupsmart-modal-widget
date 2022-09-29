/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import Image from 'next/image';
import StepHeader from '../StepHeader';
import Info from '../../assets/others/info.svg';

const Settings = () => (
  <div className="Settings mt-24">
    <div className="mini-container">
      <StepHeader count="5" main="Settings and Code" />
      <span className="text-lg font-semibold">
        Webhook to Send data
      </span>
      <span className="text-sm font-normal">
        Enter youe Webhook URL
      </span>
      <span className="text-sm font-normal flex">
        You can  create a simple one with
        <span className="font-semibold ml-1">
          make.com
        </span>
      </span>
      <input
        className="w-full form-control flex border border-solid border-gray-300 rounded-lg focus:border-blue-600 w-2/5 px-3 py-1.5 mt-4 mb-4"
        id="exampleFormControlInput1"
        placeholder="Your Webhook URL"
        type="text"
      />
      <div className="flex">
        <input
          className="mr-2"
          readOnly
          type="checkbox"
        />
        <p className="text-sm font-normal">
          Send form submissions
        </p>
      </div>
      <div className="flex">
        <input
          className="mr-2"
          readOnly
          type="checkbox"
        />
        <p className="text-sm font-normal">
          Send click data
        </p>
      </div>
      <button className="primary-button rounded-xl text-lg font-medium w-48 h-15 mt-12 px-7 py-5" type="button">
        Get your Code
      </button>
      <div className="bg-slate-800 w-96 h-64 mt-8" />
      <div className="flex items-start mt-4">
        <Image
          alt="info" height="20" src={Info}
          width="20"
        />
        <span className="text-xs ml-1">
          Copy and paste the embed code above just before the
          closing `&lt;/body&gt;` tag of your website template file.
        </span>
      </div>
    </div>
  </div>
);

export default Settings;
