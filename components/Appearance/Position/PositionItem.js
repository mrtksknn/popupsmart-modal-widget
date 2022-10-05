/* eslint-disable no-console */
import React from 'react';
import {string} from 'prop-types';

const propTypes = {position : string};
const defaultProps = {position : null};

const PositionItem = ({position}) => (
  <input
    className="grid-item appearance-none transition duration-200 cursor-pointer" id={position} name="drone"
    onClick={() => console.log(position)} type="radio" value={position}
  />
);

PositionItem.propTypes = propTypes;
PositionItem.defaultProps = defaultProps;

export default PositionItem;
