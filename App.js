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

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/utils/navigationRef';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    sessionListFlow: createStackNavigator({
      SessionList: SessionListScreen,
      SessionDetail: SessionDetailScreen,
    }),
    SessionCreate: SessionCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
