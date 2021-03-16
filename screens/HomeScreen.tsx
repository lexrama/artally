
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import Feed from '../components/Feed';
import FeedItem from '../components/FeedItem';
import { HomeScreenProps } from "../types";
import { feedData } from '../data/FeedData';

export default function HomeFeedScreen({ navigation }: HomeScreenProps) {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [searchText] = useState("");
    const [category] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <Feed
                feedItems={feedData}
                loading={loading}
                navigation={navigation}
            />
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