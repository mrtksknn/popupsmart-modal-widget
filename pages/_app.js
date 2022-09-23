import React, {useEffect} from 'react';
import {elementType, object} from 'prop-types';
import '../styles/globals.css';
import '../styles/Home.module.css';

const displayName = 'App';

const propTypes = {
  Component : elementType.isRequired,
  pageProps : object.isRequired
};

const App = props => {
  const {Component, pageProps} = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <Component {...pageProps} />
  );
};

App.propTypes = propTypes;
App.displayName = displayName;

export default App;
