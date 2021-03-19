import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import { SearchScreenProps } from "../../types";
import Posts from "./ResultsPostsScreen";
import Users from "./ResultsUsersScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../../constants/Colors';

const Tab = createMaterialTopTabNavigator();

function PostsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed!</Text>
        </View>
    );
}
  
function UsersScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
        </View>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Posts"
            tabBarOptions={{
                activeTintColor: '#e91e63',
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: 'powderblue' },
            }}
            >
            <Tab.Screen
                name="Posts"
                component={Posts}
                options={{ tabBarLabel: 'Posts' }}
            />
            <Tab.Screen
                name="Users"
                component={Users}
                options={{ tabBarLabel: 'Users' }}
            />
            
        </Tab.Navigator>
    );
  }

export default function ResultsScreen({ navigation }:SearchScreenProps ) {
    const [loading, setLoading] = useState(false);

    return (
        <MyTabs />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
    },
});
