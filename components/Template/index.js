import React from 'react';
import StepHeader from '../StepHeader';
import Header from './Header';
import TempCard from './TempCard';

// IMAGES
import Modal1 from '../../assets/Modals/01.svg';
import Modal2 from '../../assets/Modals/02.svg';
import Modal3 from '../../assets/Modals/03.svg';
import Modal4 from '../../assets/Modals/04.svg';
import Modal5 from '../../assets/Modals/05.svg';
import Modal6 from '../../assets/Modals/06.svg';
import Modal7 from '../../assets/Modals/07.svg';
import Modal8 from '../../assets/Modals/08.svg';
import Modal9 from '../../assets/Modals/09.svg';
import Modal10 from '../../assets/Modals/10.svg';
import Modal11 from '../../assets/Modals/11.svg';
import Modal12 from '../../assets/Modals/12.svg';

const Template = () => (
  <div className="Template">
    <Header />
    <StepHeader count="1" main="Choose your template" />
    <div className="grid grid-cols-4 gap-4 mt-7">
      <TempCard alt="modal-temp" image={Modal1} />
      <TempCard alt="modal-temp" image={Modal2} />
      <TempCard alt="modal-temp" image={Modal3} />
      <TempCard alt="modal-temp" image={Modal4} />
      <TempCard alt="modal-temp" image={Modal5} />
      <TempCard alt="modal-temp" image={Modal6} />
      <TempCard alt="modal-temp" image={Modal7} />
      <TempCard alt="modal-temp" image={Modal8} />
      <TempCard alt="modal-temp" image={Modal9} />
      <TempCard alt="modal-temp" image={Modal10} />
      <TempCard alt="modal-temp" image={Modal11} />
      <TempCard alt="modal-temp" image={Modal12} />
    </div>
    <div className="flex items-center justify-between bg-white py-3">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav aria-label="Pagination" className="temp-card isolate inline-flex rounded-xl p-1">
            <a
              aria-current="page"
              className="rounded-xl flex items-center justify-center bg-white p-3 w-10 h-10" href="#"
            >
              1
            </a>
            <a className="rounded-xl flex items-center justify-center w-10 h-10 p-3" href="#">
              2
            </a>
            <a className="rounded-xl flex items-center justify-content p-3 w-10 h-10" href="#">
              3
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default Template;
