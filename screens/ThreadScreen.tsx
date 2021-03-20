import * as React from 'react';
import { Image, SafeAreaView, StyleSheet, FlatList, ScrollView } from 'react-native';

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
import CommentForm from '../components/CommentForm';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function ThreadScreen({ post, navigation }: ThreadScreenProps) {
    const dpost1 = Users.cityowls.posts[0];
    const dpost2 = Users.cityowls.posts[1];


    /*
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
        <View style={styles.container}>
            <ScrollView>
                <PostCard post={dpost1} header={true} navigation={navigation} />
                <CommentCard comment={dpost1.comments[0]} navigation={navigation} />
                <CommentForm navigation={navigation} />
                <Text style={styles.spacer}>Originally posted 02/21/21</Text>
                <PostCard post={dpost2} header={true} navigation={navigation} />
                <CommentCard comment={dpost2.comments[0]} navigation={navigation} />
                <CommentCard comment={dpost2.comments[1]} navigation={navigation} />
                <CommentCard comment={dpost2.comments[2]} navigation={navigation} />
                <CommentCard comment={dpost2.comments[3]} navigation={navigation} />
            </ScrollView>
        </View>

    );
    /*
    return (
        <SafeAreaView style={styles.container}>
            <PostCard post={defaultPost} header={true} navigation={navigation} />
            <CommentCard comment={defaultPost.comments[0]} navigation={navigation} />
            <CommentCard comment={defaultPost.comments[1]} navigation={navigation} />
        </SafeAreaView>
    );
    */
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
    spacer: {
        color: Colors.artally.basicDark,
        fontSize: Layout.textMid,
        textAlign: "center",
        backgroundColor: Colors.artally.basicLight,
        padding: Layout.gapLarge,
        borderWidth: 1,
        borderColor: Colors.artally.basicMidLight,
    }
});
