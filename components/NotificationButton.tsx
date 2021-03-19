import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity, // replace a View with this to make the entire view clickable
    // import any other needed React components here
} from "react-native";
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { TagProps, NotificationButtonProps } from '../types'; // import any other needed types from types.tsx here
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function NotificationButton() { // { navigation }: NotificationButtonProps
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")} style={styles.button}>
            <Ionicons name="notifications-outline" size={25} color={Colors.artally.basicDark} />
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        height: Layout.buttonHeight,
        marginRight: Layout.gapSmall,
        paddingVertical: 4,
        paddingHorizontal: Layout.gapSmall,
    },
});
