/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable indent */
import React from 'react';

import {string} from 'prop-types';

const propTypes = {
  count : string,
  main  : string,
  sub   : string
};
const defaultProps = {
  count : null,
  main  : null,
  sub   : null
};

const StepHeader = ({count, main, sub}) => (
  <div className="step-header flex items-center mb-8">
    <span className="step-count text-base font-semibold rounded-full flex items-center justify-center w-9 h-9 mr-4">
      {count}
    </span>
    <span className="text-lg font-semibold">
      {main}
    </span>
    {sub ? <span className="font-normal ml-1">
      {sub}
    </span> : ''}
  </div>
);

StepHeader.propTypes = propTypes;
StepHeader.defaultProps = defaultProps;

export default StepHeader;
