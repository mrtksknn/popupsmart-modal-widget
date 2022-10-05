import React from 'react';
import PositionItem from './PositionItem';

const Position = () => (
  <div className="position">
    <p className="text-sm font-normal mb-4">
      Position
    </p>
    <div className="grid-container w-20">
      <PositionItem position="left:0, top:0" />
      <PositionItem position="center:0, top:0" />
      <PositionItem position="right:0, top:0" />
      <PositionItem position="left:0, center:0" />
      <PositionItem position="top: 50%, left:50%" selected />
      <PositionItem position="right:0, center:0" />
      <PositionItem position="left:0, bottom:0" />
      <PositionItem position="center:0, bottom:0" />
      <PositionItem position="right:0, bottom:0" />
    </div>
  </div>
);

export default Position;
