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
import { CommentProps } from '../types'; // import any other needed types from types.tsx here
import UserIcon from './UserIcon';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function Comment({ comment, navigation }: CommentProps) {
    return (
        <View style={styles.container}>
            <UserIcon user={Filler.user} size={"small"} navigation={navigation} />
            <View style={styles.body}>
                <Text style={styles.username}>{Filler.user.username}</Text>
                <Text style={styles.text}>{Filler.comment.text}</Text>
            </View>
            <View style={styles.buttons}>
                <Ionicons name="chevron-up" size={18} color={Colors.artally.basicDark} />
                <Ionicons name="chevron-down" size={18} color={Colors.artally.basicDark} />
                <Ionicons name="at-outline" size={18} color={Colors.artally.basicDark} />
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
    buttons: {
        flex: 1,
    }
});
