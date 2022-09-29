import React from 'react';
import Stats from './Stats';

const Statistics = () => (
  <div className="Statistics flex items-end justify-center space-x-28 pb-32">
    <div className="max-container flex flex-row justify-between">
      <Stats number="3x" text="Increate Conversion Rate" />
      <Stats number="120%" text="Email Subscribers" />
      <Stats number="390%" text="More Customer Engagement" />
      <p className="text-4xl font-semibold text-white w-96">
        Popupsmart meets all your business needs.
      </p>
    </div>
  </div>
);

export default Statistics;
