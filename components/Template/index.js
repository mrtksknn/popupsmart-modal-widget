import React from 'react';
import Header from './Header';

const Template = () => (
  <div className="Template">
    <Header />
    <div className="flex items-center mt-24">
      {/* eslint-disable-next-line max-len */}
      <span className="step-header text-base font-semibold rounded-full flex items-center justify-center w-9 h-9 mr-4">
        1
      </span>
      <span className="text-lg font-semibold">
        Choose your template
      </span>
    </div>
    <div className="grid grid-cols-4 gap-4 mt-7">
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        1
      </div>
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        2
      </div>
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        3
      </div>
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        4
      </div>
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        5
      </div>
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        6
      </div>
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        7
      </div>
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        8
      </div>
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        9
      </div>
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        10
      </div>
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        11
      </div>
      <div className="temp-card rounded-2xl flex items-center justify-center h-52">
        12
      </div>
    </div>
    <div className="flex items-center justify-between bg-white py-3">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav aria-label="Pagination" className="temp-card isolate inline-flex rounded-xl p-1">
            <a
              aria-current="page"
              className="rounded-xl flex items-center justify-center bg-white p-3 w-10 h-10" href="#"
            >
              1
            </a>
            <a className="rounded-xl flex items-center justify-center w-10 h-10 p-3" href="#">
              2
            </a>
            <a className="rounded-xl flex items-center justify-content p-3 w-10 h-10" href="#">
              3
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default Template;
