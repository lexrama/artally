import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, TouchableOpacity } from 'react-native';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import { Ionicons } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ThreadScreen from "../screens/ThreadScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ConversationScreen from "../screens/ConversationScreen";
import SearchResultsScreen from "../screens/search/ResultsScreen";
import NotificationButton from "../components/NotificationButton";
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

// had mode="modal" in front of screenOptions vvvvv
function RootNavigator() {
  const navigationRef = React.useRef(null);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerRight: () => (
        <NotificationButton />
      ),
      headerStyle: {
        backgroundColor: Colors.artally.basicLight,
      },
      headerTintColor: Colors.artally.basicDark,
      headerTitleStyle: {
        fontWeight: 'bold',
        color: Colors.artally.basicDark,
      },
    }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ title: "Artally", headerShown: true }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      {/*My Additions (not part of template)*/}
      <Stack.Screen name="Thread" component={ThreadScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
      <Stack.Screen name="Results" component={SearchResultsScreen} />
    </Stack.Navigator>
  );
}
