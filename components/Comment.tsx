import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    StyleSheet,
    SafeAreaView,
    Button,
    Image,
    Platform,
    TouchableOpacity,
    Alert, // replace a View with this to make the entire view clickable
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
import FullWidthImage from '../components/FullWidthImage';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-gesture-handler';
import ScalableImage from 'react-native-scalable-image';
import * as ImagePicker from 'expo-image-picker';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';

const sorry = () =>
    Alert.alert(
        "Can't upload image",
        "Sorry, we need camera roll permissions to make this work!",
        [
            {
                text: "OK",
                style: "cancel"
            }
        ]
    );

const info = () =>
    Alert.alert(
        "Oops!",
        "This prototype only lets you reply to each comment once. Leave this thread and come back to leave a different reply.",
        [
            {
                text: "OK",
                style: "cancel"
            }
        ]
    );

const blank = () =>
    Alert.alert(
        "Oops!",
        "You can't leave a blank comment! Enter some text or upload an image.",
        [
            {
                text: "OK",
                style: "cancel"
            }
        ]
    );



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

    const [upvoted, setUpvoted] = useState(comment.upvoted);
    const [downvoted, setDownvoted] = useState(comment.downvoted);
    const [upvotes, setUpvotes] = useState(comment.upvotes);
    const [downvotes, setDownvotes] = useState(comment.downvotes);
    const [upColor, setUpColor] = useState(Colors.artally.basicDark);
    const [downColor, setDownColor] = useState(Colors.artally.basicDark);


    const [upvotedReply, setUpvotedReply] = useState(false);
    const [downvotedReply, setDownvotedReply] = useState(false);
    const [upvotesReply, setUpvotesReply] = useState(0);
    const [downvotesReply, setDownvotesReply] = useState(0);
    const [upColorReply, setUpColorReply] = useState(Colors.artally.basicDark);
    const [downColorReply, setDownColorReply] = useState(Colors.artally.basicDark);

    const defaultReplyText = "@" + user.username + " ";

    const [myReplyText, setMyReplyText] = useState(defaultReplyText);
    const [haveReplied, setHaveReplied] = useState(false);
    const [showReplyForm, setShowReplyForm] = useState(false);

    const [replyImage, setReplyImage] = useState(Images.artally.uri);
    const [replyHasImage, setReplyHasImage] = useState(false);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    sorry();
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        //console.log(result);

        if (!result.cancelled) {
            setReplyImage(result.uri);
            setReplyHasImage(true);
        }
    };


    let op: any;
    if (comment.op) {
        op = (
            <View style={styles.op}>
                <Text style={styles.opText}>Original poster</Text>
            </View>
        );
    }

    let defaultImg = Images.girl_redlined;

    let img = (
        <View style={styles.right}>
            <ScalableImage source={defaultImg} height={150} />
        </View>
    );
    if (comment.user != "izipizi") {
        img = (
            <View style={styles.right}>
                <ScalableImage source={{ uri: comment.image }} height={150} />
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

    let upvoteReply = <TouchableOpacity onPress={() => {
        if (upvotedReply) {
            setUpvotedReply(false);
            setUpvotesReply(upvotesReply - 1);
            setUpColorReply(Colors.artally.basicDark);
        } else {
            setUpvotedReply(true);
            setUpvotesReply(upvotesReply + 1);
            setUpColorReply(Colors.artally.action);
        }
    }}>
        <Ionicons name="chevron-up" size={18} color={upColorReply} />
    </TouchableOpacity>


    let downvoteReply = <TouchableOpacity onPress={() => {
        if (downvotedReply) {
            setDownvotedReply(false);
            setDownvotesReply(downvotesReply - 1);
            setDownColorReply(Colors.artally.basicDark);
        } else {
            setDownvotedReply(true);
            setDownvotesReply(downvotesReply + 1);
            setDownColorReply(Colors.artally.alert);
        }
    }}>
        <Ionicons name="chevron-down" size={18} color={downColorReply} />
    </TouchableOpacity>




    let replyButton = <TouchableOpacity onPress={() => {
        if (haveReplied) {
            info();
        } else {
            setShowReplyForm(true);
        }
    }}>
        <Ionicons name="chevron-down" size={18} color={downColor} />
    </TouchableOpacity>

    let myReply = (
        <View style={styles.reply}>
            <View style={styles.container}>
                <UserIcon user={Users.nifty_salamander} size={"small"} navigation={navigation} />
                <View style={styles.body}>
                    <View style={styles.row}>
                        <Text style={styles.username}>nifty_salamander</Text>
                        {op}
                        <Text style={styles.timestamp}>0s</Text>
                    </View>
                    <Text style={styles.text}>{myReplyText}</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.votes}>
                        <Text style={styles.text}>{upvotesReply}</Text>
                        {upvoteReply}
                    </View>
                    <View style={styles.votes}>
                        <Text style={styles.text}>{downvotesReply}</Text>
                        {downvoteReply}
                    </View>
                    <TouchableOpacity style={styles.votes} onPress={() => info()}>
                        {/*<Ionicons name="at-outline" size={18} color={Colors.artally.tag} />*/}
                        <Text style={styles.replyText}>Reply</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.right}>
                {replyHasImage ? <ScalableImage source={{ uri: replyImage }} height={150} /> : null}
            </View>
        </View>
    );

    const removeImage = () => {
        setReplyImage("");
        setReplyHasImage(false);
    }

    let imagePreview = (
        <View style={styles2.imagePreview}>
            <TouchableOpacity onPress={removeImage}>
                <Ionicons name="close-circle-outline" size={20} color={Colors.artally.action} />
            </TouchableOpacity>
            <ScalableImage source={{ uri: replyImage }} height={150} />
        </View>
    );


    let replyForm = (
        <View style={styles2.reply}>
            <View style={styles2.container}>
                <UserIcon user={Users.nifty_salamander} size={"small"} navigation={navigation} />
                <View style={styles2.body}>
                    <Text style={styles2.username}>nifty_salamander</Text>
                    <View style={styles2.bottomRow}>
                        <TextInput
                            style={styles2.textInput}
                            onChangeText={(myReplyText) => setMyReplyText(myReplyText)}
                            onSubmitEditing={() => submitReply()}
                            value={myReplyText} // was "text"
                            placeholder={"Reply to " + user.username + "..."}
                            placeholderTextColor={Colors.artally.basicMidLight}
                        />
                        <TouchableOpacity onPress={() => submitReply()}>
                            <Ionicons name="send-outline" size={25} color={Colors.artally.action} />
                        </TouchableOpacity>
                    </View>
                    {replyHasImage ? imagePreview : null}
                    <View style={styles2.buttons}>
                        <Ionicons name="camera-outline" size={25} color={Colors.artally.basicMidLight} />
                        <TouchableOpacity onPress={pickImage}>
                            <Ionicons name="image-outline" size={25} color={Colors.artally.action} />
                        </TouchableOpacity>
                        <Ionicons name="happy-outline" size={25} color={Colors.artally.basicMidLight} />
                    </View>

                </View>
            </View>
        </View>
    );

    const submitReply = () => {
        if (myReplyText.length == 0 && replyHasImage == false) {
            blank();
        } else {
            setHaveReplied(true)
            setShowReplyForm(false);
        }
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
                    <TouchableOpacity style={styles.votes} onPress={() => {
                        if (haveReplied) {
                            info();
                        } else {
                            setShowReplyForm(true);
                        }
                    }}>
                        {/*<Ionicons name="at-outline" size={18} color={Colors.artally.tag} />*/}
                        <Text style={styles.replyText}>Reply</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {comment.hasImage ? img : null}
            {haveReplied ? myReply : null}
            {showReplyForm ? replyForm : null}
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


const styles2 = StyleSheet.create({
    body: {
        flex: 15,
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
        marginVertical: Layout.gapSmall,
        marginHorizontal: Layout.gapLarge,
        backgroundColor: Colors.artally.white,
    },
    textInput: {
        borderColor: Colors.artally.basicMidLight,
        borderRadius: Layout.radiusLarge,
        borderWidth: 1,
        fontSize: Layout.textMid,
        color: Colors.artally.basicDark,
        padding: Layout.gapSmall,
        marginHorizontal: Layout.gapSmall,
        width: "95%"
    },
    bottomRow: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Layout.gapLarge,
        marginTop: Layout.gapSmall,
    },
    buttons: {
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: Layout.gapLarge,
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
    imagePreview: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        marginVertical: Layout.gapSmall,
        marginLeft: Layout.gapSmall,
    }
});