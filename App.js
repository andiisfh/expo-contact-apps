import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ListContactPage from './ListContactPage';
import DetailContactPage from './DetailContactPage';
import PostContactPage from './PostContactPage';
import UpdateContactPage from './UpdateContactPage';

const MainNavigator = createStackNavigator({
  ListContact: {screen: ListContactPage},
  DetailContact: {screen: DetailContactPage},
  PostContact: {screen: PostContactPage},
  UpdateContact: {screen: UpdateContactPage},
});

const App = createAppContainer(MainNavigator);

export default App;