import React from 'react';

const Settings = () => (
  <div className="Settings mt-24">
    <div className="container">
      <div className="flex items-center mb-8">
        {/* eslint-disable-next-line max-len */}
        <span className="step-header text-base font-semibold rounded-full flex items-center justify-center w-9 h-9 mr-4">
          5
        </span>
        <span className="text-lg font-semibold">
          Settings and Code
        </span>
      </div>
      <p className="text-lg font-semibold">
        Webhook to Send data
      </p>
      <p className="text-sm font-normal">
        Enter youe Webhook URL
      </p>
      <p className="text-sm font-normal flex">
        You can  create a simple one with
        <p className="font-semibold ml-1">
          make.com
        </p>
      </p>
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
    </div>
  </div>
);

export default Settings;