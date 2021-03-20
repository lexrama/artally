// OLD FILE
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import Feed from '../components/Feed';
import FeedItem from '../components/FeedItem';
import { HomeScreenProps } from "../types";
import { feedData } from '../data/FeedData';
import { Posts } from '../data/Posts';
import firestore from "../firebase";
import { Post } from '../types';

/*
const extractPost = (data: any) => {
    let post: Post = {
        id: data.id,
        user: data.user,
        image: data.image,
        title: data.title,
        description: data.description,
        tags: data.tags,
        timestamp: data.timestamp,
        status: data.status,
        comments: data.comments,
        previousVersions: data.previousVersions,
    }
    return post;
}
*/

export default function HomeScreen({ navigation }: HomeScreenProps) {
    const emptyPostsArray: Post[] = [];
    
    const [loading, setLoading] = useState(false);
    const [fsPosts, setFsPosts] = useState(emptyPostsArray);
    /*
    const getPosts = async () => {
        let postsCollRef = firestore.collection("posts");
        let postDocs = await postsCollRef.get();
        let extractedPosts: Post[] = [];
        postDocs.forEach(postDoc => {
            let data = postDoc.data();
            let extractedPost: Post = extractPost(data);
            extractedPosts.push(extractedPost);
        });
        setFsPosts(extractedPosts);
    }
    
    useEffect(() => {
        getPosts();
    });
    */

    return (
        <SafeAreaView style={styles.container}>
            <Feed
                feedItems={fsPosts} // eventually want this to be fsPosts
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
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
    },
});
