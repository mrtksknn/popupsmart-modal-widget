import React from 'react';
import {number, func} from 'prop-types';

const propTypes = {
  setOpenTab : func,
  tab        : number
};
const defaultProps = {
  setOpenTab : null,
  tab        : null
};

const PageSelect = ({setOpenTab, tab}) => (
  <ul className="pagination flex flex-row items-center justify-between list-none rounded-xl mt-8 w-32 p-1 h-12">
    <li className="text-center flex items-center w-10">
      <a
        className={`flex items-center justify-center w-full py-2 ${tab === 1 ? 'bg-white rounded-xl' : 'text-blueGray-600 bg-blueGray-600'}`}
        data-toggle="tab"
        href="#link1"
        onClick={e => {
          e.preventDefault();
          setOpenTab(1);
        }}
      >
        1
      </a>
    </li>
    <li className="text-center flex items-center w-10">
      <a
        className={`flex items-center justify-center w-full py-2 ${tab === 2 ? 'bg-white rounded-xl' : 'text-blueGray-600 bg-blueGray-600'}`}
        data-toggle="tab"
        href="#link1"
        onClick={e => {
          e.preventDefault();
          setOpenTab(2);
        }}
      >
        2
      </a>
    </li>
    <li className="text-center flex items-center w-10">
      <a
        className={`flex items-center justify-center w-full py-2 ${tab === 3 ? 'bg-white rounded-xl' : 'text-blueGray-600 bg-blueGray-600'}`}
        data-toggle="tab"
        href="#link1"
        onClick={e => {
          e.preventDefault();
          setOpenTab(3);
        }}
      >
        3
      </a>
    </li>
  </ul>
);

PageSelect.propTypes = propTypes;
PageSelect.defaultProps = defaultProps;

export default PageSelect;
