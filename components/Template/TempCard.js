import React from 'react';
import {string} from 'prop-types';
import Image from 'next/image';

const propTypes = {image : string};
const defaultProps = {image : null};

const TempCard = ({image}) => (
  <div className="temp-card rounded-2xl flex items-center justify-center h-52">
    <Image
      alt="modal" height="170" src={image}
      width="170"
    />
    <span className="info">
      <button className="w-full text-base font-semibold rounded-xl py-3.5 px-6" type="button">
        Select Template
      </button>
    </span>
  </div>
);

TempCard.propTypes = propTypes;
TempCard.defaultProps = defaultProps;

export default TempCard;
