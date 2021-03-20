import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    StyleSheet,
    SafeAreaView,
    Button,
    Image,
    TouchableOpacity, // replace a View with this to make the entire view clickable
    // import any other needed React components here
} from "react-native";
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Filler from "../data/Filler";
import { CommentProps, User, Post, Comment } from '../types'; // import any other needed types from types.tsx here
import UserIcon from './UserIcon';
import { Users } from '../data/Users2';
import FullWidthImage from './FullWidthImage';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function CommentCard({ comment, navigation }: CommentProps) {
    let user: User = Users.nifty_salamander;
    if (comment.user == "izipizi") {
        user = Users.izipizi;
    } else if (comment.user == "Saturno_22") {
        user = Users.saturno_22;
    } else if (comment.user == "CityOwls") {
        user = Users.cityowls;
    }

    let op;
    if (comment.op) {
        op = (
            <View style={styles.op}>
                <Text style={styles.opText}>Original poster</Text>
            </View>
        );
    }

    let upvote = (<Ionicons name="chevron-up" size={18} color={Colors.artally.basicDark} />);
    if (comment.upvoted) {
        upvote = (<Ionicons name="chevron-up" size={18} color={Colors.artally.action} />);
    }

    let downvote = (<Ionicons name="chevron-down" size={18} color={Colors.artally.basicDark} />);
    if (comment.downvoted) {
        downvote = (<Ionicons name="chevron-down" size={18} color={Colors.artally.alert} />);
    }

    let img;
    if (comment.hasImage) {
        img = (
            <View style={styles.right}>
                <FullWidthImage source={comment.image} size="reply" />
            </View>
        );
    }

    let body = (
        <View style={styles.body}>
            <View style={styles.row}>
                <Text style={styles.username}>{user.username}</Text>
                {op}
            </View>
            <Text style={styles.text}>{comment.text}</Text>
        </View>
    );
    if (comment.topLevel == false) {
        <View style={styles.replyBody}>
            <View style={styles.row}>
                <Text style={styles.username}>{user.username}</Text>
                {op}
            </View>
            <Text style={styles.text}>{comment.text}</Text>
        </View>
    }

    return (
        <View>
            <View style={styles.container}>
                <UserIcon user={user} size={"small"} navigation={navigation} />
                {body}
                <View style={styles.buttons}>
                    <View style={styles.votes}>
                        <Text style={styles.text}>{comment.upvotes}</Text>
                        {upvote}
                    </View>
                    <View style={styles.votes}>
                        <Text style={styles.text}>{comment.downvotes}</Text>
                        {downvote}
                    </View>
                    <Ionicons name="at-outline" size={18} color={Colors.artally.basicDark} />
                </View>

            </View>
            {img}
        </View>
    );
}


const styles = StyleSheet.create({
    body: {
        flex: 6,
    },
    replyBody: {
        flex: 3,
    },
    text: {
        fontSize: Layout.textMid,
        fontWeight: 'normal',
        marginHorizontal: Layout.gapSmall,
        color: Colors.artally.basicDark,
    },
    username: {
        fontSize: Layout.textMid,
        fontWeight: 'bold',
        marginHorizontal: Layout.gapSmall,
        color: Colors.artally.basicDark,
    },
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: Layout.gapSmall,
        backgroundColor: Colors.artally.white,
    },
    buttons: {
        flex: 1,
    },
    op: {
        borderRadius: Layout.radiusLarge,
        marginRight: Layout.gapSmall,
        paddingBottom: 2,
        paddingHorizontal: 6,
        backgroundColor: Colors.artally.white,
        borderWidth: 1,
        borderColor: Colors.artally.basicMid,
    },
    opText: {
        fontSize: Layout.textSmall,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.artally.basicMid,
    },
    row: {
        flexDirection: "row",
    },
    votes: {
        flexDirection: "row",
        //alignContent: "flex-end",
        //justifyContent: "center",
    },
    right: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
    }
});
