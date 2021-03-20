import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import { SearchScreenProps } from "../../types";
import Tag from "../../components/Tag";
import ProfileHeader from "../../components/ProfileHeader";
import Feed from "../../components/Feed";
import { Users } from "../../data/Users2"

export default function ResultsPostsScreen({ navigation }:SearchScreenProps ) {
    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Tag text='digital' size={"large"} navigation={null}/>
            <Feed
                feedItems={Users.izipizi.posts} // was feedData, eventually want this to be fsPosts
                header={false}
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
