import React from 'react';

const Size = () => (
  <div>
    <p className="text-sm font-normal">
      Size
    </p>
    <ul className="nav nav-tabs flex flex-col md:flex-row list-none mt-4 mb-8" id="tabs-tab" role="tablist">
      <li className="step-header rounded-l-xl nav-item p-1" role="presentation">
        <a aria-controls="tabs-home" aria-selected="true" className="flex nav-link rounded-xl font-medium text-sm bg-white px-6 py-3">
          Small
        </a>
      </li>
      <li className="step-header nav-item p-1" role="presentation">
        <a aria-controls="tabs-home" aria-selected="true" className="active flex nav-link rounded-xl font-medium text-sm px-6 py-3">
          Medium
        </a>
      </li>
      <li className="step-header rounded-r-xl nav-item p-1" role="presentation">
        <a aria-controls="tabs-home" aria-selected="true" className="flex nav-link rounded-xl font-medium text-sm px-6 py-3">
          Large
        </a>
      </li>
    </ul>
  </div>
);

export default Size;
