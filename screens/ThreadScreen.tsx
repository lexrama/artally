import React, { useEffect, useState } from 'react';
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



export default function ThreadScreen({ postID, navigation }: ThreadScreenProps) {
    const [iHaveCommented, setIHaveCommented] = useState(false);
    const [myCommentText, setMyCommentText] = useState("");

    let post = Users.cityowls.posts[0];
    //console.log(postID);
    if (postID == 1) {
        post = Users.cityowls.posts[0];
    } else if (postID == 2) {
        post = Users.cityowls.posts[1];
    } else if (postID == 3) {
        post = Users.nifty_salamander.posts[0];
    } else if (postID == 4) {
        post = Users.nifty_salamander.posts[1];
    } else if (postID == 5) {
        post = Users.izipizi.posts[0];
    } else if (postID == 6) {
        post = Users.izipizi.posts[1];
    } else if (postID == 7) {
        post = Users.cityowls.posts[2];
    } else if (postID == 8) {
        post = Users.saturno_22.posts[0];
    } else if (postID == 9) {
        post = Users.saturno_22.posts[1];
    } 

    /*let commentsListArr = post.comments.map(comment => (
        <CommentCard key={comment.id}/>
    )
    */

    const renderComments = (postToRender: Post) => {
        let renderedComments: any = [];
        postToRender.comments.forEach(comment => {
            renderedComments.push(<CommentCard comment={comment} navigation={navigation} />);
        });
        return renderedComments;
    }

    let commentForm;
    if (post.status != 3) commentForm = <CommentForm reply={false} navigation={navigation} />;

    let timeDivider;
    let previousPost;
    let previousPostComments;
    if (post.id == 1) {
        timeDivider = <Text style={styles.spacer}>Originally posted 02/21/21</Text>;
        previousPost = <PostCard post={Users.cityowls.posts[1]} header={true} clickable={false} navigation={navigation} />;
        previousPostComments = renderComments(Users.cityowls.posts[1]);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <PostCard post={post} header={true} clickable={false} navigation={navigation} />
                {renderComments(post)}
                {commentForm}
                {timeDivider}
                {previousPost}
                {previousPostComments}
                {/*
                <CommentCard comment={dpost1.comments[0]} navigation={navigation} />
                <Text style={styles.spacer}>Originally posted 02/21/21</Text>
                <PostCard post={dpost2} header={true} navigation={navigation} />
                <CommentCard comment={dpost2.comments[0]} navigation={navigation} />
                <CommentCard comment={dpost2.comments[1]} navigation={navigation} />
                <CommentCard comment={dpost2.comments[2]} navigation={navigation} />
                <CommentCard comment={dpost2.comments[3]} navigation={navigation} />
                */}
                <View style={styles.spacer}></View>
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
