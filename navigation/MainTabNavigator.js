import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ProfileScreen from '../screens/ProfileScreen';
import LinksScreen from '../screens/FeedScreen';
import SettingsScreen from '../screens/SettingsScreen';

const tabColors = {
  activeTintColor: 'gray',
  activeBackgroundColor: 'white',
  inactiveTintColor: 'white',
  swipeEnabled: false,
  showLabel: true,
  showIcon: true,
  style: {
    backgroundColor: 'gray',
  },
  indicatorStyle: {
    backgroundColor: 'gray',
  }
}

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Profile = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
  tabBarOptions: tabColors,
};

Profile.path = '';

const Feed = createStackNavigator(
  {
    Feed: LinksScreen,
  },
  config
);

Feed.navigationOptions = {
  tabBarLabel: 'Feed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
  tabBarOptions: tabColors,
};

Feed.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
  tabBarOptions: tabColors,
};

SettingsStack.path = '';

const Likes = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

Likes.navigationOptions = {
  tabBarLabel: 'Likes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-heart-empty' : 'md-heart-empty'} />
  ),
  tabBarOptions: tabColors,
};

Likes.path = '';

const tabNavigator = createBottomTabNavigator({
  Feed,
  Profile,
  SettingsStack,
  Likes,
});

tabNavigator.path = '';

export default tabNavigator;
