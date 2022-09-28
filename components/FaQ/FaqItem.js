/* eslint-disable indent */
import React from 'react';
import {string, bool} from 'prop-types';
import Image from 'next/image';
import Plus from '../../assets/others/plus.svg';
import Minus from '../../assets/others/minus.svg';

const propTypes = {
  active   : bool,
  faq      : string,
  onToggle : string
};
const defaultProps = {
  active   : false,
  faq      : null,
  onToggle : null
};

const FaqItem = ({faq, onToggle, active}) => {
  const {question, answer} = faq;

  return (
    <li className={`accordion_item ${active ? 'active' : ''}`}>
      <button className="button w-full text-lg font-semibold flex justify-between px-8 py-6" onClick={onToggle} type="button">
        {question}
        <span className="control">
          {active ? <Image
            alt="close" height="20" src={Minus}
            width="20"
                    /> : <Image
                      alt="close" height="20" src={Plus}
                      width="20"
                         />}
        </span>
      </button>
      <div className={`answer_wrapper ${active ? 'open' : ''}`}>
        <div className="answer text-base font-normal px-8 py-6">
          {answer}
        </div>
      </div>
    </li>
  );
};

FaqItem.propTypes = propTypes;
FaqItem.defaultProps = defaultProps;

export default FaqItem;
