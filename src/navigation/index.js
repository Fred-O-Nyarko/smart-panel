import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {
  SplashScreen,
  SignInScreen,
  HomeScreen,
  SettingScreen,
  EnergyBillingScreen,
  BreakerConditionScreen,
  UserProfileScreen,
  ManageBreakerScreen,
  ManageAccountScreen,
  SignUpScreen,
} from '../screens';

const MainStack = createAppContainer (
  createStackNavigator (
    {
      HomeScreen,
      SettingScreen,
      EnergyBillingScreen,
      BreakerConditionScreen,
      UserProfileScreen,
      ManageBreakerScreen,
      ManageAccountScreen,
    },
    {
      headerMode: 'none',
    }
  )
);

const AuthStack = createAppContainer (
  createStackNavigator (
    {
      SignInScreen: {
        screen: ({navigation, screenProps}) => (
          <SignInScreen navigation={navigation} screenProps={screenProps} />
        ),
      },
      SignUpScreen: {
        screen: ({navigation, screenProps}) => (
          <SignUpScreen navigation={navigation} screenProps={screenProps} />
        ),
      },
    },
    {
      headerMode: 'none',
    }
  )
);

export default createAppContainer (
  createSwitchNavigator (
    {
      SplashScreen,
      AuthStack: {
        screen: ({navigation}) => (
          <AuthStack screenProps={{switchStack: navigation}} />
        ),
      },
      MainStack: {
        screen: ({navigation}) => (
          <MainStack screenProps={{switchStack: navigation}} />
        ),
      },
    },
    {
      initialRouteName: 'MainStack',
    }
  )
);
