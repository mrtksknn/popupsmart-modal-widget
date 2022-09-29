import React from 'react';
import {string} from 'prop-types';

const propTypes = {
  number     : string,
  setOpenTab : string,
  tab        : string
};
const defaultProps = {
  number     : null,
  setOpenTab : null,
  tab        : null
};

const PageSelect = ({setOpenTab, tab, number}) => (
  <li className="text-center flex items-center h-full">
    <a
      className={`flex items-center justify-center w-10 h-10 ${tab === number ? 'bg-white rounded-xl' : 'text-blueGray-600 bg-blueGray-600'}`}
      data-toggle="tab"
      onClick={e => {
        e.preventDefault();
        setOpenTab(number);
      }}
    >
      {number}
    </a>
  </li>
);

PageSelect.propTypes = propTypes;
PageSelect.defaultProps = defaultProps;

export default PageSelect;
