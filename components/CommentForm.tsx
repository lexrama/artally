import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    StyleSheet,
    SafeAreaView,
    Button,
    Image,
    Alert,
    TextInput,
    TouchableOpacity, // replace a View with this to make the entire view clickable
    // import any other needed React components here
} from "react-native";
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Filler from "../data/Filler";
import { CommentFormProps } from '../types'; // import any other needed types from types.tsx here
import UserIcon from './UserIcon';
import { Users } from '../data/Users2';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


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


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function CommentForm({ navigation }: CommentFormProps) {
    const user = Users.nifty_salamander;

    const [text, onChangeText] = React.useState("");
    return (
        <View style={styles.container}>
            <UserIcon user={user} size={"small"} navigation={navigation} />
            <View style={styles.body}>
                <Text style={styles.username}>{user.username}</Text>
                <View style={styles.bottomRow}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(inputText) => onChangeText(inputText)}
                        onSubmitEditing={() => confirm()}
                        value={text} // was "text"
                        placeholder="Leave a comment..."
                    />
                    <TouchableOpacity onPress={() => confirm()}>
                        <Ionicons name="send-outline" size={25} color={Colors.artally.action} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <Ionicons name="camera-outline" size={25} color={Colors.artally.action} />
                    <Ionicons name="image-outline" size={25} color={Colors.artally.action} />
                    <Ionicons name="happy-outline" size={25} color={Colors.artally.action} />
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
        margin: Layout.gapSmall,
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
});
