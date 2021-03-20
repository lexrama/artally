import React, { useEffect, useState } from 'react';
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
import Images from '../constants/Images';
import Filler from "../data/Filler";
import { CommentProps, User, Post, Comment } from '../types'; // import any other needed types from types.tsx here
import UserIcon from './UserIcon';
import { Users } from '../data/Users2';
import FullWidthImage from './FullWidthImage';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function CommentCard({ comment, navigation }: CommentProps) {
    const [upvoted, setUpvoted] = useState(comment.upvoted);
    const [downvoted, setDownvoted] = useState(comment.downvoted);
    const [upvotes, setUpvotes] = useState(comment.upvotes);
    const [downvotes, setDownvotes] = useState(comment.downvotes);
    const [upColor, setUpColor] = useState(Colors.artally.basicDark);
    const [downColor, setDownColor] = useState(Colors.artally.basicDark);

    /*
    useEffect(() => {
    });
    */

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


    let upvote = <TouchableOpacity onPress={() => {
        if (upvoted) {
            setUpvoted(false);
            setUpvotes(upvotes - 1);
            setUpColor(Colors.artally.basicDark);
        } else {
            setUpvoted(true);
            setUpvotes(upvotes + 1);
            setUpColor(Colors.artally.action);
        }
    }}>
        <Ionicons name="chevron-up" size={18} color={upColor} />
    </TouchableOpacity>


    let downvote = <TouchableOpacity onPress={() => {
        if (downvoted) {
            setDownvoted(false);
            setDownvotes(downvotes - 1);
            setDownColor(Colors.artally.basicDark);
        } else {
            setDownvoted(true);
            setDownvotes(downvotes + 1);
            setDownColor(Colors.artally.alert);
        }
    }}>
        <Ionicons name="chevron-down" size={18} color={downColor} />
    </TouchableOpacity>


    let img;
    if (comment.hasImage) {
        img = (
            <View style={styles.right}>
                <FullWidthImage source={comment.image} size="reply" />
            </View>
        );
    }



    let commentStyle = comment.topLevel ? styles.none : styles.reply;

    return (
        <View style={commentStyle}>
            <View style={styles.container}>
                <UserIcon user={user} size={"small"} navigation={navigation} />
                <View style={styles.body}>
                    <View style={styles.row}>
                        <Text style={styles.username}>{user.username}</Text>
                        {op}
                        <Text style={styles.timestamp}>{comment.timestamp}</Text>
                    </View>
                    <Text style={styles.text}>{comment.text}</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.votes}>
                        <Text style={styles.text}>{upvotes}</Text>
                        {upvote}
                    </View>
                    <View style={styles.votes}>
                        <Text style={styles.text}>{downvotes}</Text>
                        {downvote}
                    </View>
                    <TouchableOpacity style={styles.votes}>
                        {/*<Ionicons name="at-outline" size={18} color={Colors.artally.tag} />*/}
                        <Text style={styles.replyText}>Reply</Text>
                    </TouchableOpacity>
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
    replyText: {
        fontSize: Layout.textMid,
        fontWeight: 'normal',
        color: Colors.artally.tag,
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
        backgroundColor: Colors.artally.white,
        marginVertical: Layout.gapSmall,
        marginHorizontal: Layout.gapLarge,
    },
    replyContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: Colors.artally.white,
        //marginVertical: Layout.gapSmall,
    },
    reply: {
        marginRight: Layout.gapSmall,
        marginLeft: Layout.gapLarge,
        paddingLeft: Layout.gapLarge,
        borderLeftWidth: 1,
        borderColor: Colors.artally.basicLight,
    },
    none: {

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
        alignContent: "flex-end",
        justifyContent: "flex-end",
    },
    right: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
    },
    timestamp: {
        fontSize: Layout.textSmall,
        fontWeight: "normal",
        color: Colors.artally.basicMid,
        alignSelf: "center",
    }
});
