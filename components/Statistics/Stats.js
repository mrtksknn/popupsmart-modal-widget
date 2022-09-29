import React from 'react';
import {string} from 'prop-types';

const propTypes = {
  number : string,
  text   : string
};
const defaultProps = {
  number : null,
  text   : null
};

const Stats = ({number, text}) => (
  <div className="text-white">
    <p className="text-7xl font-semibold">
      {number}
    </p>
    <div className="stat-text flex text-base flex-col">
      {text}
    </div>
  </div>
);

Stats.propTypes = propTypes;
Stats.defaultProps = defaultProps;

export default Stats;
