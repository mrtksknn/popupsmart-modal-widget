import Appearance from '../Appearance';
import Intro from '../Intro';
import Statistics from '../Statistics';
import Template from '../Template';
import Content from '../Content';
import Rules from '../Rules';
import Settings from '../Settings';
import Conversation from '../Conversation';
import Faq from '../FaQ';

const displayName = 'Home';

const Home = () => (
  <div className="Home mt-14">
    <Intro />
    <Statistics />
    <div className="bg-white w-full flex items-center flex-col pt-24">
      <Template />
      <Appearance />
      <Content />
      <Rules />
      <Settings />
    </div>
    <Conversation />
    <Faq />
  </div>
);

Home.displayName = displayName;

export default Home;
