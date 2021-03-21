import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import { SearchScreenProps } from "../../types";
import Tag from "../../components/Tag";
import ProfileHeader from "../../components/ProfileHeader";
import Feed from "../../components/Feed";
import { Users } from "../../data/Users2"
import Layout from "../../constants/Layout";
import TagArray from "../../components/TagArray";
import Colors from "../../constants/Colors";

export default function ResultsPostsScreen({ navigation }: SearchScreenProps) {
    const [loading, setLoading] = useState(false);

    const posts = [
        Users.cityowls.posts[2],
        Users.saturno_22.posts[0],
        Users.cityowls.posts[0],
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>3 results for:</Text>
                <TagArray tags={["digital", "illustration"]} size="large" navigation={navigation} />
            </View>
            <Feed
                feedItems={posts} // was feedData, eventually want this to be fsPosts
                header={true}
                loading={loading}
                navigation={navigation}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.artally.white,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    top: {
        //flexDirection: "row",
        alignSelf: "flex-start",
        marginVertical: Layout.gapLarge,
        justifyContent: "center",
    },
    title: {
        fontSize: Layout.textLarge,
        color: Colors.artally.basicMid,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginLeft: Layout.gapLarge,
        marginBottom: Layout.gapSmall,
    },
});
