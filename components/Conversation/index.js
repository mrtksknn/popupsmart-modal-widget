import React from 'react';
import Card from './Card';
import Pixel from '../../assets/others/pixel.svg';
import Modern from '../../assets/others/modern.svg';
import Ready from '../../assets/others/ready.svg';

const Conversation = () => (
  <div className="Conversation flex flex-col items-center">
    <span className="font-semibold text-4xl mt-24 mb-12">
      Conversation & UX ready popups & modals
    </span>
    <div className="grid grid-cols-3 gap-3">
      <Card
        image={Pixel} subTitle="Helps you calculate your email
      marketing roi to measure success." title="Pixel Perfect"
      />
      <Card
        image={Ready} subTitle="Empowers your emails by
        generating afree code for a CTA in your subject line." title="Conversation Ready"
      />
      <Card
        image={Modern} subTitle="Enables you to estimate the
        total profit of your investment on a popup service." title="Modern & Useful"
      />
    </div>
  </div>
);

export default Conversation;
