/* eslint-disable no-console */
import React from 'react';
import Faq from '../FaQ';
import Intro from '../Intro';
import Rules from '../Rules';
import Modal from '../Modal';
import Camper from '../Camper';
import Content from '../Content';
import Template from '../Template';
import Settings from '../Settings';
import BuildInfo from '../BuildInfo';
import Appearance from '../Appearance';
import Statistics from '../Statistics';
import Conversation from '../Conversation';

const displayName = 'Home';

const Home = () => (
  <div className="w-full flex items-center flex-col mt-14">
    <Intro />
    <Camper />
    <Statistics />
    <Template />
    <div className="max-container flex flex-row items-start">
      <div className="bg-white w-full flex flex-col">
        <Appearance />
        <Content />
        <Rules />
        <Settings />
      </div>
      <Modal />
    </div>
    <Conversation />
    <Faq />
    <BuildInfo />
  </div>
);

Home.displayName = displayName;

export default Home;
