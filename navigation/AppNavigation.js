import {createDrawerNavigator, createBottomTabNavigator, createMaterialTopTabNavigator,createStackNavigator, createAppContainer } from "react-navigation";

import Home from '../screens/home';
import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
import Profile from '../screens/profile'
const StackNavigation = createStackNavigator({
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    Dashboard: {
        screen: Dashboard
    },
   
},  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

const TabNavigation = createMaterialTopTabNavigator ({
    Home: {
        screen: StackNavigation
    },
      Profile: {
        screen: Profile
    },
})
// const DrawerNavigator = createDrawerNavigator ({
//     Home: {
//         screen: StackNavigation
//     },
//       Profile: {
//         screen: Profile
//     },
// })
const Navigator = createAppContainer(TabNavigation)

export default Navigator