import React from 'react';
import Head from 'next/head';

const displayName = 'AppHead';

const AppHead = () => (
  <Head>
    <title>
      Popupsmart Modal Creator
    </title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link href="/favicon.ico" rel="icon" />
  </Head>
);

AppHead.displayName = displayName;

export default AppHead;
