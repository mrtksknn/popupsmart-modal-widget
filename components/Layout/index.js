import {Fragment} from 'react';
import {node} from 'prop-types';
import AppHead from '../AppHead/AppHead';
import Header from './Header';
import Footer from './Footer';

const displayName = 'MainLayout';
const propTypes = {
  children : node.isRequired
};

const MainLayout = ({children}) => (
  <Fragment>
    <AppHead />
    <Header />
    {children}
    <Footer />
  </Fragment>
);

MainLayout.displayName = displayName;
MainLayout.propTypes = propTypes;

export default MainLayout;
