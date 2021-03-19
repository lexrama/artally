import * as React from 'react';
import { Image, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Feed from '../components/Feed';
import FullWidthImage from '../components/FullWidthImage';
import { ThreadScreenProps, Post, User, Comment } from '../types';
import { Users } from '../data/Users2';
import PostCard from "../components/PostCard";
import CommentCard from "../components/Comment";
import Images from "../constants/Images";
import Filler from "../data/Filler";
import FeedItem from '../components/FeedItem';

export default function ThreadScreen({ post, navigation }: ThreadScreenProps) {
    const defaultPost = Users.cityowls.posts[0];

    const data: (Post | Comment)[] = [];

    data.push(defaultPost);
    defaultPost.comments.forEach( comment => data.push(comment));

    const renderItem = (item: (Post | Comment)) => { // should take in a Post
        let type: string = typeof item;
        console.log(type);
        if (type == "Post") {
            return (
                <PostCard post={item as Post} header={true} navigation={navigation} />
            );
        } else if (type == "Comment"){
            return (
                <CommentCard comment={item as Comment} navigation={navigation} />
            );
        }
    };
    /*
    return (
        <View style={styles.container}>
            <FlatList
                data={data} // was feedItems
                renderItem={({ item }) => renderItem(item)}
                //keyExtractor={(item) => item.id}
            />
        </View>
    );
    */


    return (
        <SafeAreaView style={styles.container}>
            <PostCard post={defaultPost} header={true} navigation={navigation} />
            <CommentCard comment={defaultPost.comments[0]} navigation={navigation} />
            <CommentCard comment={defaultPost.comments[1]} navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
