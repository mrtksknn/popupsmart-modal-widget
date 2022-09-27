import React, {useState} from 'react';
import {string} from 'prop-types';

const propTypes = {title : string};
const defaultProps = {title : null};

const ToggleSelect = ({title}) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="toogle flex w-full justify-between mt-7 mb-5">
      <p className="font-semibold text-sm">
        {title}
      </p>
      <div className="flex">
        <label className="inline-flex relative cursor-pointer">
          <input
            checked={enabled} className="sr-only peer" readOnly
            type="checkbox"
          />
          <div
            className="
            w-8 h-5
            after:h-3
            after:w-3
            bg-gray-200
            rounded-full
            after:border
            after:mt-1
            after:absolute
            after:bg-white
            after:left-[4px]
            after:rounded-full
            after:transition-all
            peer-checked:bg-purple-600
            peer-checked:after:translate-x-full"
            onClick={() => {
              setEnabled(!enabled);
            }}
          />
        </label>
      </div>
    </div>
  );
};

ToggleSelect.propTypes = propTypes;
ToggleSelect.defaultProps = defaultProps;

export default ToggleSelect;
