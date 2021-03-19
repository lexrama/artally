import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import { SearchScreenProps } from "../../types";
import { SearchBar } from 'react-native-elements';


export default function BaseScreen({ navigation }:SearchScreenProps ) {
    const [loading, setLoading] = useState(false);
    
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
            platform="ios"
            ></SearchBar>
                
            <Text>tester</Text>
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
