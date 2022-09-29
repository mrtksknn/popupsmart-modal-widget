import React from 'react';
import StepHeader from '../StepHeader';
import Header from './Header';
import Pagination from './Pagination';

const Template = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div className="Template">
      <Header />
      <StepHeader count="1" main="Choose your template" />
      <Pagination tab={openTab} />
      <ul className="pagination flex flex-row items-center justify-between list-none rounded-xl mt-8 w-32 p-1 h-12">
        <li className="text-center flex items-center h-full">
          <a
            className={`flex items-center justify-center w-10 h-10 ${openTab === 1 ? 'bg-white rounded-xl' : 'text-blueGray-600 bg-blueGray-600'}`}
            data-toggle="tab"
            href="#link1"
            onClick={e => {
              e.preventDefault();
              setOpenTab(1);
            }}
          >
            1
          </a>
        </li>
        <li className="text-center flex items-center h-full">
          <a
            className={`flex items-center justify-center w-10 h-10 ${openTab === 2 ? 'bg-white rounded-xl' : 'text-blueGray-600 bg-blueGray-600'}`}
            data-toggle="tab"
            href="#link1"
            onClick={e => {
              e.preventDefault();
              setOpenTab(2);
            }}
          >
            2
          </a>
        </li>
        <li className="text-center flex items-center h-full">
          <a
            className={`flex items-center justify-center w-10 h-10 ${openTab === 3 ? 'bg-white rounded-xl' : 'text-blueGray-600 bg-blueGray-600'}`}
            data-toggle="tab"
            href="#link1"
            onClick={e => {
              e.preventDefault();
              setOpenTab(3);
            }}
          >
            3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Template;
