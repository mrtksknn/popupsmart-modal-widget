/* eslint-disable no-console */
import React from 'react';

const Size = () => {
  const [size, setSize] = React.useState('small');

  return (
    <div className="Size">
      <p className="text-sm font-normal">
        Size
      </p>
      <ul className="nav nav-tabs flex flex-col md:flex-row list-none mt-4 mb-8" id="tabs-tab" role="tablist">
        <li className="step-header rounded-l-xl nav-item p-1" role="presentation">
          <a
            aria-controls="tabs-home" aria-selected="true" className={`flex nav-link rounded-xl font-medium text-sm cursor-pointer px-6 py-3 ${size === 'small' ? 'bg-white rounded-xl' : 'text-blueGray-600 bg-blueGray-600'}`}
            onClick={e => {
              e.preventDefault();
              setSize('small');
              console.log('small');
            }}
          >
            Small
          </a>
        </li>
        <li className="step-header nav-item p-1" role="presentation">
          <a
            aria-controls="tabs-home" aria-selected="true" className={`flex nav-link rounded-xl font-medium text-sm cursor-pointer px-6 py-3 ${size === 'medium' ? 'bg-white rounded-xl' : 'text-blueGray-600 bg-blueGray-600'}`}
            onClick={e => {
              e.preventDefault();
              setSize('medium');
              console.log('medium');
            }}
          >
            Medium
          </a>
        </li>
        <li className="step-header rounded-r-xl nav-item p-1" role="presentation">
          <a
            aria-controls="tabs-home" aria-selected="true" className={`flex nav-link rounded-xl font-medium text-sm cursor-pointer px-6 py-3 ${size === 'large' ? 'bg-white rounded-xl' : 'text-blueGray-600 bg-blueGray-600'}`}
            onClick={e => {
              e.preventDefault();
              setSize('large');
              console.log('large');
            }}
          >
            Large
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Size;
