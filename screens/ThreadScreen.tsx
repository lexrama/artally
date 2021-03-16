import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Feed from '../components/Feed';
import { ThreadScreenProps } from '../types';

export default function ThreadScreen({post, navigation}: ThreadScreenProps) {
    return (
        <View style={styles.container}>
            <View style={styles.comment}>
                <Image source={require("../assets/images/avatar.png")} />
                <Text style={styles.username}>username</Text>
            </View>
            <Image source={require("../assets/images/togepi.jpeg")} />
            <Text style={styles.title}>Title</Text>
            <Text style={styles.body}>Description</Text>
            <Text style={styles.tags}>#tag1  #tag2  #tag3  #tag4  #tag5</Text>
            <View style={styles.comment}>
                <Image source={require("../assets/images/avatar.png")} />
                <Text style={styles.username}>other_username</Text>
                <Text style={styles.commentText}>this is a comment!</Text>
            </View>
            <View style={styles.comment}>
                <Image source={require("../assets/images/avatar.png")} />
                <Text style={styles.username}>other_other_username</Text>
                <Text style={styles.commentText}>this is another comment! :)</Text>
            </View>
            <View style={styles.comment}>
                <Image source={require("../assets/images/avatar.png")} />
                <Text style={styles.username}>username4</Text>
                <Text style={styles.commentText}>so many comments!!</Text>
            </View>
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
