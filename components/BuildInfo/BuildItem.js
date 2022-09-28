import React from 'react';
import {string, bool} from 'prop-types';
import Image from 'next/image';

const propTypes = {
  header : string,
  image  : bool,
  text   : string
};
const defaultProps = {
  header : null,
  image  : false,
  text   : null
};

const BuildItem = ({image, header, text}) => (
  <div className="build-item flex flex-col items-center">
    <div className="image-circle rounded-full items-center justify-center flex h-32 w-32">
      <Image
        alt="build" height="50" src={image}
        width="50"
      />
    </div>
    <span className="text-lg font-semibold mt-8 mb-2">
      {header}
    </span>
    <span className="text-sm font-normal text-center">
      {text}
    </span>
  </div>
);

BuildItem.propTypes = propTypes;
BuildItem.defaultProps = defaultProps;

export default BuildItem;
