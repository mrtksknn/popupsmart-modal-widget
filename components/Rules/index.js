import React from 'react';
import DeviceSelect from './DeviceSelect';
import ToggleSelect from './ToggleSelect';
import StepHeader from '../StepHeader';

const Rules = () => (
  <div className="Rules mt-24 w-96">
    <div className="mini-container">
      <StepHeader count="4" main="Targeting Rules" />
      <ToggleSelect title="Visitor Device" />
      <DeviceSelect />
      <ToggleSelect title="After X seconds" />
      <input
        className="w-full form-control flex border border-solid border-gray-300 rounded-lg focus:border-blue-600 px-3 py-1.5 mt-4"
        id="exampleFormControlInput1"
        placeholder="12"
        type="text"
      />
      <ToggleSelect title="After % Scroll" />
      <input
        className="w-full form-control flex border border-solid border-gray-300 rounded-lg focus:border-blue-600 px-3 py-1.5 mt-4"
        id="exampleFormControlInput1"
        placeholder="50"
        type="text"
      />
      <ToggleSelect title="Traffic Source" />
      <input
        className="w-full form-control flex border border-solid border-gray-300 rounded-lg focus:border-blue-600 px-3 py-1.5 mt-4 mb-20"
        id="exampleFormControlInput1"
        placeholder="Enter your traffic source domain"
        type="text"
      />
      <ToggleSelect title="Browser Language" />
      <select
        aria-label="Default select example" className="form-select block w-full pl-3 py-1.5 mb-4 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat,
        border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      >
        <option>
          Select
        </option>
        <option value="1">
          One
        </option>
        <option value="2">
          Two
        </option>
        <option value="3">
          Three
        </option>
      </select>
      <select
        aria-label="Default select example" className="form-select
        block
        w-full
        pl-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      >
        <option>
          Select
        </option>
        <option value="1">
          One
        </option>
        <option value="2">
          Two
        </option>
        <option value="3">
          Three
        </option>
      </select>
      <ToggleSelect title="Exit İntent Targeting" />
    </div>
  </div>
);

export default Rules;
