import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeTabScreen from '../screens/HomeTabScreen';
import SearchTabScreen from '../screens/SearchTabScreen';
import UploadTabScreen from '../screens/UploadTabScreen';
import MessagesTabScreen from '../screens/MessagesTabScreen';
import MyProfileTabScreen from '../screens/MyProfileTabScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, HomeTabParamList, SearchTabParamList, UploadTabParamList, MessagesTabParamList, MyProfileTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Upload"
        component={UploadTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-add-circle" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-chatbubbles" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={MyProfileTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeTabStack = createStackNavigator<HomeTabParamList>();

function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeTabScreen"
        component={HomeTabScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeTabStack.Navigator>
  );
}

const SearchTabStack = createStackNavigator<SearchTabParamList>();

function SearchTabNavigator() {
  return (
    <SearchTabStack.Navigator>
      <SearchTabStack.Screen
        name="SearchTabScreen"
        component={SearchTabScreen}
        options={{ headerTitle: 'Search' }}
      />
    </SearchTabStack.Navigator>
  );
}

const UploadTabStack = createStackNavigator<UploadTabParamList>();

function UploadTabNavigator() {
  return (
    <UploadTabStack.Navigator>
      <UploadTabStack.Screen
        name="UploadTabScreen"
        component={UploadTabScreen}
        options={{ headerTitle: 'Upload' }}
      />
    </UploadTabStack.Navigator>
  );
}

const MessageTabStack = createStackNavigator<MessagesTabParamList>();

function MessagesTabNavigator() {
  return (
    <MessageTabStack.Navigator>
      <MessageTabStack.Screen
        name="MessagesTabScreen"
        component={MessagesTabScreen}
        options={{ headerTitle: 'Messages' }}
      />
    </MessageTabStack.Navigator>
  );
}

const MyProfileTabStack = createStackNavigator<MyProfileTabParamList>();

function MyProfileTabNavigator() {
  return (
    <MyProfileTabStack.Navigator>
      <MyProfileTabStack.Screen
        name="MyProfileTabScreen"
        component={MyProfileTabScreen}
        options={{ headerTitle: 'My Profile' }}
      />
    </MyProfileTabStack.Navigator>
  );
}