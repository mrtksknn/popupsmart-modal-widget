import React from 'react';
import {string} from 'prop-types';

const propTypes = {header : string};
const defaultProps = {header : null};

const LogoLoad = ({header}) => (
  <div className="LogoLoad">
    <p className="text-sm font-normal mb-4 mt-8">
      {header}
    </p>
    <div className="flex">
      <label className="border border-dashed flex flex-col items-center justify-center w-full h-44 mb-3 px-20" htmlFor="formFile">
        <input
          className="form-control block w-full text-base font-normal text-gray-700 cursor-pointer border border-solid border-gray-300 invisible"
          id="formFile" type="file"
        />
        <label className="form-label inline-block text-gray-700 text-sm mb-2">
          Drop your image here or upload
        </label>
      </label>
    </div>
  </div>
);

LogoLoad.propTypes = propTypes;
LogoLoad.defaultProps = defaultProps;

export default LogoLoad;
