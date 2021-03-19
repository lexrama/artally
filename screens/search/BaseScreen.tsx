import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { SearchScreenProps, SearchResultsScreenProps } from "../../types";
import { SearchBar } from 'react-native-elements';
import { Text, View } from '../../components/Themed';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';


export default function BaseScreen({ navigation }:SearchScreenProps ) {
    const [loading, setLoading] = useState(false);
    
    const resultsProps: SearchResultsScreenProps = {
        navigation: navigation,
    }

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
            platform="ios"
            ></SearchBar>
                
            <Text>tester</Text>
            <Button title="go to results" type="active" onPress={() => navigation.navigate("Results", resultsProps)} navigation={navigation}/>
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
