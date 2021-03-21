import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from "react-native";
import Feed from '../components/Feed';
import FeedItem from '../components/FeedItem';
import { feedData } from '../data/FeedData';
import { Users } from '../data/Users2';
import { Posts } from '../data/Posts';
import firestore from "../firebase";
import { Post, HomeTabParamList, HomeScreenProps, User } from '../types';
import DBHelper from '../data/DBHelper';

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


export default function HomeTabScreen({ navigation }: HomeTabParamList) {
    const emptyPostsArray: Post[] = [];
    const emptyUsersArray: User[] = [];

    const [loading, setLoading] = useState(false);
    const [fsPosts, setFsPosts] = useState(emptyPostsArray);
    const [fsUsers, setFsUsers] = useState(emptyUsersArray);

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


    const getUsers = async () => {
        let usersCollRef = firestore.collection("users");
        let userDocs = await usersCollRef.get();
        let extractedUsers: User[] = [];
        userDocs.forEach(userDoc => {
            let data = userDoc.data();
            let extractedUser: User = DBHelper.extractUser(data);
            extractedUsers.push(extractedUser);
        });
        setFsUsers(extractedUsers);
    }

    useEffect(() => {
        //
    });

    getUsers();
    let allPosts: Post[] = [];
    fsUsers.forEach(fsUser => {
        fsUser.posts.forEach(post => {
            allPosts.push(post);
        });
    });


    /*
    allPosts.push(Users.cityowls.posts[0]);
    Users.saturno_22.posts.forEach(post =>
        allPosts.push(post)
    );
    Users.izipizi.posts.forEach(post =>
        allPosts.push(post)
    );
    */

    return (
        <SafeAreaView>
            <Feed
                feedItems={allPosts} // was feedData, eventually want this to be fsPosts
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
