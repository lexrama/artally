import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import { SearchScreenProps } from "../../types";


export default function ResultsUsersScreen({ navigation }:SearchScreenProps ) {
    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            
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