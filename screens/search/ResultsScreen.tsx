import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import { SearchScreenProps } from "../../types";
import Posts from "./ResultsPostsScreen";
import Users from "./ResultsUsersScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function ResultsScreen({ navigation }:SearchScreenProps ) {
    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Tab.Navigator>
                <Tab.Screen name="Posts" component={Posts} />
                <Tab.Screen name="Users" component={Users} />
            </Tab.Navigator>
        </SafeAreaView>
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
