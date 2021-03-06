import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn43183288Navigator from '../features/SignIn43183288/navigator';
import SignUp14183287Navigator from '../features/SignUp14183287/navigator';
import ArticleList5183286Navigator from '../features/ArticleList5183286/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn43183288: { screen: SignIn43183288Navigator },
SignUp14183287: { screen: SignUp14183287Navigator },
ArticleList5183286: { screen: ArticleList5183286Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
