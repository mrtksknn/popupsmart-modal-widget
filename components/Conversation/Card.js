import React from 'react';
import Image from 'next/image';
import {string, object} from 'prop-types';

const propTypes = {
  image    : object,
  subTitle : string,
  title    : string
};
const defaultProps = {
  image    : string,
  subTitle : null,
  title    : null
};

const Card = ({title, subTitle, image}) => (
  <div className="card flex items-center flex-col text-center justify-center rounded-xl w-96 h-64 px-16 py-14">
    <Image alt="icon" src={image} />
    <p className="text-lg font-semibold mt-6 mb-2.5">
      {title}
    </p>
    <p className="text-sm font-normal">
      {subTitle}
    </p>
  </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
