/* eslint-disable react/jsx-child-element-spacing */
import React, {useState} from 'react';
import {faqs} from './data';
import FaqItem from './FaqItem';

const FAQ = () => {
  const [clicked, setClicked] = useState('0');

  const handleToggle = index => {
    if (clicked === index) {
      return setClicked('0');
    }

    return setClicked(index);
  };

  return (
    <div className="Faq mt-28">
      <span className="font-semibold w-full flex justify-center text-4xl mb-12">
        Frequently Asked Questions
      </span>
      <ul className="accordion">
        {faqs.map(faq => (
          <FaqItem
            active={clicked === faq} faq={faq} key={faq}
            onToggle={() => handleToggle(faq)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
