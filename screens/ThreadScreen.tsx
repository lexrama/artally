import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Feed from '../components/Feed';
import FullWidthImage from '../components/FullWidthImage';
import { ThreadScreenProps, Post } from '../types';
import PostCard from "../components/PostCard";
import Comment from "../components/Comment";
import Images from "../constants/Images";
import Filler from "../data/Filler";

export default function ThreadScreen({post, navigation}: ThreadScreenProps) {
    return (
        <View style={styles.container}>
            <PostCard post={Filler.post} header={true} navigation={navigation}/>
            <Comment comment={Filler.comment} navigation={navigation}/>
            <Comment comment={Filler.comment} navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 8,
    },
    body: {
        fontSize: 12,
        fontWeight: 'normal',
        marginLeft: 8,
        marginBottom: 8,
      },
    commentText: {
        fontSize: 12,
        fontWeight: 'normal',
        marginLeft: 8,
      },
    username: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    comment: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 12,
    },
    tags: {
        fontSize: 12,
        fontWeight: 'normal',
        marginLeft: 8,
        marginBottom: 16,
        color: 'green',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
