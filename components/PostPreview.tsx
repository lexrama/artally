import * as React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Button,
    Image,
    TouchableOpacity, // replace a View with this to make the entire view clickable
    // import any other needed React components here
} from "react-native";
import { Text, View } from '../components/Themed';
import Feed from '../components/Feed';
import FullWidthImage from '../components/FullWidthImage';
import { ThreadScreenProps, Post } from '../types';
import Comment from "./Comment";
import Images from "../constants/Images";
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Filler from "../data/Filler";
import { PostPreviewProps } from '../types'; // import any other needed types from types.tsx here
import PostHeader from './PostHeader';
import TagArray from './TagArray';
import PostFooter from './PostFooter';
import UserIcon from './UserIcon';
import { Users } from '../data/Users2';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function PostPreview({ post, navigation }: PostPreviewProps) {

    const threadProps: ThreadScreenProps = {
        postID: post.id,
        navigation: navigation,
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Thread", { threadProps })}>
            {/*<View style={styles.left}>
                <UserIcon user={Users.izipizi} size={"small"} navigation={navigation} />
                <Text style={styles.username}>{Users.izipizi.username}</Text>
                </View>*/}
            <FullWidthImage source={post.image} size="reply" />
            <View style={styles.margin}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.description}>{post.description}</Text>
            </View>
            {/*<PostFooter post={post} navigation={navigation} />*/}
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        borderColor: Colors.artally.basicLight,
        //borderTopWidth: 1,
        backgroundColor: Colors.artally.white,
        width: Layout.window.width / 2,
        //borderRadius: Layout.radiusLarge,
        flexDirection: "column",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        //height: Layout.window.width * 0.75,
    },
    spacer: {
        backgroundColor: Colors.artally.white,
        height: Layout.gapLarge,
    },
    text: {
        fontSize: 20,
        fontWeight: 'normal',
    },
    tags: {
        fontSize: 12,
        fontWeight: 'normal',
        marginLeft: 8,
        marginBottom: 16,
        color: 'green',
    },
    title: {
        fontSize: Layout.textLarge,
        fontWeight: 'bold',
        padding: Layout.gapSmall,
        color: Colors.artally.basicDark,
    },
    description: {
        fontSize: Layout.textMid,
        fontWeight: 'normal',
        marginLeft: Layout.gapSmall,
        marginBottom: Layout.gapLarge,
        color: Colors.artally.basicDark,
    },
    body: {
        fontSize: 12,
        fontWeight: 'normal',
        marginLeft: 8,
        marginBottom: 8,
    },
    left: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.artally.white,
        padding: Layout.gapSmall,
    },
    right: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: Colors.artally.white,
        padding: Layout.gapSmall,
    },
    username: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 8,
        color: Colors.artally.basicDark,
    },
    margin: {
        margin: Layout.gapSmall,
    }
    // edit those styles or define more here!
});
