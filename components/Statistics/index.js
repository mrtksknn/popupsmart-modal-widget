import React from 'react';

const Statistics = () => (
  <div className="Statistics flex items-end justify-center space-x-28 pb-32">
    <div className="stat-wrapper flex flex-row justify-between">
      <div className="text-white">
        <p className="text-7xl font-semibold">
          3x
        </p>
        <div className="flex text-base flex-col">
          <span>
            Increase
          </span>
          <span>
            Conversion Rate
          </span>
        </div>
      </div>
      <div className="text-white">
        <p className="text-7xl font-semibold">
          120%
        </p>
        <div className="flex text-base flex-col">
          <span>
            Email
          </span>
          <span>
            Subscribers
          </span>
        </div>
      </div>
      <div className="text-white">
        <p className="text-7xl font-semibold">
          390%
        </p>
        <div className="flex text-base flex-col">
          <span>
            More Customer
          </span>
          <span>
            Engagement
          </span>
        </div>
      </div>
      <p className="text-4xl font-semibold text-white w-96">
        Popupsmart meets
        all your business
        needs.
      </p>
    </div>
  </div>
);

export default Statistics;
