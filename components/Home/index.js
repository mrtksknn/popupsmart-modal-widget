import Intro from '../Intro';
import Statistics from '../Statistics';

const displayName = 'Home';

const Home = () => (
  <div className="Home mt-14">
    <Intro />
    <Statistics />
  </div>
);

Home.displayName = displayName;

export default Home;
