import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import SessionCreateScreen from './src/screens/SessionCreateScreen';
import SessionListScreen from './src/screens/SessionListScreen';
import SessionDetailScreen from './src/screens/SessionDetailScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as SessionProvider } from './src/context/SessionContext';
import { setNavigator } from './src/utils/navigationRef';
import { FontAwesome } from '@expo/vector-icons';

const sessionListFlow = createStackNavigator({
  SessionList: SessionListScreen,
  SessionDetail: SessionDetailScreen,
});

sessionListFlow.navigationOptions = {
  title: 'История',
  tabBarIcon: <FontAwesome name='th-list' size={24} color='white' />,
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator(
    {
      sessionListFlow: sessionListFlow,
      SessionCreate: SessionCreateScreen,
      Statistics: StatisticsScreen,
      Account: AccountScreen,
    },
    {
      barStyle: { backgroundColor: '#FF5500' },
      activeColor: 'white',
      inactiveColor: '#9B9B9B',
    }
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <SessionProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </SessionProvider>
    </AuthProvider>
  );
};
