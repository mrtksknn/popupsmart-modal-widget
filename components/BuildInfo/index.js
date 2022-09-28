/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import BuildItem from './BuildItem';
import target from '../../assets/others/target.svg';
import paper from '../../assets/others/paper.svg';
import aws from '../../assets/others/aws.svg';
import code from '../../assets/others/code.svg';

const FAQ = () => (
  <div className="Build mt-28">
    <span className="font-semibold w-full flex justify-center text-4xl mb-16">
      Build great popups without code
    </span>
    <div className="grid grid-cols-4 gap-4">
      <BuildItem header="Targeting Options" image={target} text="Target +26 trigger to your visitors" />
      <BuildItem header="No Code" image={code} text="No code required while you're creating a popup" />
      <BuildItem header="Targeting Options" image={paper} text="Target +26 trigger to your visitors" />
      <BuildItem header="Targeting Options" image={aws} text="Target +26 trigger to your visitors" />
    </div>
  </div>
);

export default FAQ;
