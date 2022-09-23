import MainLayout from '../components/Layout';
import Home from '../components/Home';

const displayName = 'AppIndex';

const AppIndex = () => (
  <MainLayout>
    <Home />
  </MainLayout>
);

AppIndex.displayName = displayName;

export default AppIndex;
