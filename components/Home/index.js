import Intro from '../Intro';
import Statistics from '../Statistics';
import Template from '../Template';

const displayName = 'Home';

const Home = () => (
  <div className="Home mt-14">
    <Intro />
    <Statistics />
    <div className="bg-white w-full flex items-center flex-col pt-24">
      <Template />
    </div>
  </div>
);

Home.displayName = displayName;

export default Home;
