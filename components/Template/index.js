import React from 'react';
import StepHeader from '../StepHeader';
import Header from './Header';
import Pagination from './Pagination';
import PageSelect from './Pagination/PageSelect';

const Template = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div className="Template mt-24">
      <Header />
      <StepHeader count="1" main="Choose your template" />
      <Pagination tab={openTab} />
      <PageSelect setOpenTab={setOpenTab} tab={openTab} />
    </div>
  );
};

export default Template;
