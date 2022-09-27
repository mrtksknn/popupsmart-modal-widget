import React from 'react';
import PositionItem from './PositionItem';

const Position = () => (
  <div className="position">
    <p className="text-sm font-normal mb-4">
      Position
    </p>
    <div className="grid-container w-20">
      <PositionItem />
      <PositionItem />
      <PositionItem />
      <PositionItem />
      <PositionItem selected="true" />
      <PositionItem />
      <PositionItem />
      <PositionItem />
      <PositionItem />
    </div>
  </div>
);

export default Position;
