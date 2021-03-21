import React, { useState, useCallback } from "react";
import PropTypes from "prop-types"; //consider using this!
import {
    StyleSheet,
    SafeAreaView,
    View,
    FlatList,
    Text,
    Linking,
    Button,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import FeedItem from '../components/FeedItem';
import PostCard from '../components/PostCard';
import { FeedProps, FeedItemData, Post, User, Comment, TagPreviewProps } from "../types";
import firebase from "firebase";
import firestore from "../firebase";
//import { Colors } from "react-native/Libraries/NewAppScreen";
import Colors from "../constants/Colors";
import PostPreview from "./PostPreview";
import Layout from "../constants/Layout";
import Tag from "./Tag";


const getPosts = async () => {
    let fsPostsRef = firestore.collection("posts");
    let fsPosts = await fsPostsRef.get();
}

export default function TagPreview({ tag, posts, navigation }: TagPreviewProps) {

    const renderItem = (item: Post) => { // should take in a Post
        return (
            <View style={styles.listItem}>
                <PostPreview post={item} navigation={navigation} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.tagHeader}>
                <Tag text={tag} size="large" navigation={navigation}/>
            </View>
            <FlatList
                data={posts}
                renderItem={({ item }) => renderItem(item)}
                horizontal={true}
            />
        </View>
    );

}


const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        //justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start",
        width: "95%",
        backgroundColor: Colors.artally.basicMid,
        padding: Layout.gapLarge,
        borderRadius: Layout.radiusLarge,
        marginTop: Layout.gapLarge,
        alignSelf: "center",
    },

    listItem: {
        marginRight: Layout.gapLarge,
    },

    tagHeader: {
        marginBottom: Layout.gapLarge,
    }

});