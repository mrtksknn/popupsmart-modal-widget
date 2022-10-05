import React from 'react';
import {number} from 'prop-types';
import TempCard from '../TempCard';

import MODALLIST1 from '../../../constant/ModalList1';
import MODALLIST2 from '../../../constant/ModalList2';
import MODALLIST3 from '../../../constant/ModalList3';

const propTypes = {tab : number};
const defaultProps = {tab : null};

const Pagination = ({tab}) => (
  <div>
    <div className={tab === 1 ? 'grid grid-cols-4 gap-4' : 'hidden'} id="link1">
      {MODALLIST1.map(collectionItem => (
        <div key={collectionItem.id}>
          <TempCard alt="modal-temp" image={collectionItem.URL} />
        </div>
      ))}
    </div>
    <div className={tab === 2 ? 'grid grid-cols-4 gap-4' : 'hidden'} id="link2">
      {MODALLIST2.map(collectionItem => (
        <div key={collectionItem.id}>
          <TempCard alt="modal-temp" image={collectionItem.URL} />
        </div>
      ))}
    </div>
    <div className={tab === 3 ? 'grid grid-cols-4 gap-4' : 'hidden'} id="link3">
      {MODALLIST3.map(collectionItem => (
        <div key={collectionItem.id}>
          <TempCard alt="modal-temp" image={collectionItem.URL} />
        </div>
      ))}
    </div>
  </div>
);

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
