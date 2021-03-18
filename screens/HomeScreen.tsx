
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import Feed from '../components/Feed';
import FeedItem from '../components/FeedItem';
import { HomeScreenProps } from "../types";
import { feedData } from '../data/FeedData';
import { Posts } from '../data/Posts';
import firestore from "../firebase";
import { Post } from '../types';


const extractPost = (data: any) => {
    let fsPost: Post = {
        id: data.id,
        user: data.user,
        image: data.image,
        title: data.title,
        description: data.description,
        tags: data.tags,
        timestamp: data.timestamp,
        status: data.status,
        comments: data.comments,
        topLevel: data.topLevel,
        previousVersions: data.previousVersions,
    }
    return fsPost;
}

const getPostDocs = async () => {
    let postsCollRef = firestore.collection("posts");
    let postDocs = await postsCollRef.get();
    return postDocs;
    
    //return fsPosts as Post[];
}


export default function HomeScreen({ navigation }: HomeScreenProps) {
    const [loading, setLoading] = useState(false);

    let fsPostDocs = getPostDocs();

    let fsPosts: Post[] = [];
    /*
    fsPostDocs.forEach(postDoc => {
        let data = postDoc.data();
        let fsPost: Post = extractPost(data);
        fsPosts.push(fsPost);
    });
    */

    return (
        <SafeAreaView style={styles.container}>
            <Feed
                feedItems={Posts} // was feedData, eventually want this to be fsPosts
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
