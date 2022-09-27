import React from 'react';
import ColorItem from './ColorItem';

const Colors = () => (
  <div className="colors">
    <p className="text-sm font-normal mb-4 mt-8">
      Colors
    </p>
    <div className="color-grid flex">
      <ColorItem value="#000000" />
      <ColorItem value="#F37C34" />
      <ColorItem value="#777777" />
      <ColorItem value="#dddddd" />
      <ColorItem value="#ffffff" />
    </div>
  </div>
);

export default Colors;
