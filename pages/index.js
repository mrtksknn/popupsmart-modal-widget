import MainLayout from '../components/Layout';
import Home from '../components/Home';
import {Provider} from 'react-redux';
import store from '../redux/store';

const displayName = 'AppIndex';

const AppIndex = () => (
  <Provider store={store}>
    <MainLayout>
      <Home />
    </MainLayout>
  </Provider>
);

AppIndex.displayName = displayName;

export default AppIndex;
