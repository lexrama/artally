import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    StyleSheet,
    SafeAreaView,
    Button,
    Image,
    Alert,
    TextInput,
    Platform,
    TouchableOpacity, // replace a View with this to make the entire view clickable
    // import any other needed React components here
} from "react-native";
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Filler from "../data/Filler";
import { CommentFormProps, Comment } from '../types'; // import any other needed types from types.tsx here
import UserIcon from './UserIcon';
import { Users } from '../data/Users2';
import CommentCard from '../components/Comment';
import * as ImagePicker from 'expo-image-picker';
import ScalableImage from 'react-native-scalable-image';
import Images from '../constants/Images';
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


const confirm = () =>
    Alert.alert(
        "Comment uploaded!",
        "",
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

const info = () =>
    Alert.alert(
        "Oops!",
        "This prototype only lets you comment at the bottom of the post once. Leave this thread and come back to leave a different comment.",
        [
            {
                text: "OK",
                style: "cancel"
            }
        ]
    );


const makeComment = (text: string, hasImage: boolean, imageURI: string) => {
    let comment: Comment = {
        id: 420,
        post: 420,
        user: "nifty_salamander",
        op: false,
        text: text,
        timestamp: "0s",
        upvotes: 0,
        downvotes: 0,
        upvoted: false,
        downvoted: false,
        hasImage: hasImage,
        image: imageURI,
        topLevel: true,
        replies: [],
    }
    return comment;
}

// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function CommentForm({ reply, navigation }: CommentFormProps) {
    const user = Users.nifty_salamander;
    const [text, onChangeText] = React.useState("");
    const [haveCommented, setHaveCommented] = React.useState(false);
    let blankComment = makeComment("Test", false, "");
    const [myComment, setMyComment] = React.useState(blankComment);
    const [image, setImage] = React.useState(Images.artally.uri);
    const [hasImage, setHasImage] = React.useState(false);

    React.useEffect(() => {
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
            setImage(result.uri);
            setHasImage(true);
        }
    };

    const submitComment = () => {
        if (haveCommented) {
            info();
        } else if (text.length == 0 && hasImage == false) {
            blank();
        } else {
            let newComment = makeComment(text, hasImage, image);
            setMyComment(newComment);
            setHaveCommented(true);
            onChangeText("");
            setHasImage(false);
            setImage("");
        }
    }

    const removeImage = () => {
        setImage("");
        setHasImage(false);
    }

    let imagePreview = (
        <View style={styles.imagePreview}>
            <TouchableOpacity onPress={removeImage}>
                <Ionicons name="close-circle-outline" size={20} color={Colors.artally.action} />
            </TouchableOpacity>
            <ScalableImage source={{ uri: image }} height={150} />
        </View>
    );

    let myCommentComponent = <CommentCard comment={myComment} navigation={navigation} />

    let commentStyle = reply ? styles.reply : styles.none;
    return (
        <View>
            {haveCommented ? myCommentComponent : null}
            <View style={commentStyle}>
                <View style={styles.container}>
                    <UserIcon user={user} size={"small"} navigation={navigation} />
                    <View style={styles.body}>
                        <Text style={styles.username}>{user.username}</Text>
                        <View style={styles.bottomRow}>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(inputText) => onChangeText(inputText)}
                                onSubmitEditing={() => submitComment()}
                                value={text} // was "text"
                                placeholder="Leave a comment..."
                                placeholderTextColor={Colors.artally.basicMidLight}
                            />
                            <TouchableOpacity onPress={() => submitComment()}>
                                <Ionicons name="send-outline" size={25} color={Colors.artally.action} />
                            </TouchableOpacity>
                        </View>
                        {hasImage ? imagePreview : null}
                        <View style={styles.buttons}>
                            <Ionicons name="camera-outline" size={25} color={Colors.artally.basicMidLight} />
                            <TouchableOpacity onPress={pickImage}>
                                <Ionicons name="image-outline" size={25} color={Colors.artally.action} />
                            </TouchableOpacity>
                            <Ionicons name="happy-outline" size={25} color={Colors.artally.basicMidLight} />
                        </View>

                    </View>
                </View>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
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
