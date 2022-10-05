/* eslint-disable no-console */
import React from 'react';
import {string} from 'prop-types';

const propTypes = {value : string};
const defaultProps = {value : null};

const ColorItem = ({value}) => (
  <input
    className="grid-item appearance-none transition duration-200 color-item rounded-xl cursor-pointer hover:opacity-70 mr-2 w-10 h-10"
    id="flexCheckDefault3" onClick={() => console.log(value)}
    type="checkbox"
    value={value}
  />
);

ColorItem.propTypes = propTypes;
ColorItem.defaultProps = defaultProps;

export default ColorItem;
