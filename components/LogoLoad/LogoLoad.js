import React from 'react';
import {string} from 'prop-types';

const propTypes = {header : string};
const defaultProps = {header : null};

const LogoLoad = ({header}) => (
  <div className="colors">
    <p className="text-sm font-normal mb-4 mt-8">
      {header}
    </p>
    <div className="flex">
      <div className="border border-dashed py-8 h-44 px-16 mb-3">
        <input
          className="form-control block w-full text-base font-normal text-gray-700 cursor-pointer border border-solid border-gray-300"
          id="formFile" type="file"
        />
        <label className="form-label inline-block mb-2 text-gray-700" htmlFor="formFile">
          Default file input example
        </label>
      </div>
    </div>
  </div>
);

LogoLoad.propTypes = propTypes;
LogoLoad.defaultProps = defaultProps;

export default LogoLoad;
