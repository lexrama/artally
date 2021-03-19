import * as React from 'react';
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
import { TagProps, ButtonProps } from '../types'; // import any other needed types from types.tsx here
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function Button({ title, type, onPress, navigation }: ButtonProps) {
    if (type == "active") {
        return (
            <TouchableOpacity onPress={onPress} style={styles.active}>
                <Text style={styles.activeText}>{title}</Text>
            </TouchableOpacity>
        );
    } else if (type == "inactive") {
        return (
            <TouchableOpacity onPress={onPress} style={styles.inactive}>
                <Text style={styles.inactiveText}>{title}</Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={onPress} style={styles.outline}>
                <Text style={styles.outlineText}>{title}</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    active: {
        borderRadius: Layout.buttonRadius,
        height: Layout.buttonHeight,
        marginRight: Layout.gapSmall,
        paddingVertical: 4,
        paddingHorizontal: Layout.gapLarge,
        backgroundColor: Colors.artally.action,
    },
    activeText: {
        fontSize: Layout.textLarge,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.artally.white,
    },
    inactive: {
        borderRadius: Layout.buttonRadius,
        height: Layout.buttonHeight,
        marginRight: Layout.gapSmall,
        paddingVertical: 4,
        paddingHorizontal: Layout.gapLarge,
        backgroundColor: Colors.artally.white,
        borderWidth: 1,
        borderColor: Colors.artally.basicMidLight,
    },
    inactiveText: {
        fontSize: Layout.textLarge,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.artally.basicMidLight,
    },
    outline: {
        borderRadius: Layout.buttonRadius,
        height: Layout.buttonHeight,
        marginRight: Layout.gapSmall,
        paddingVertical: 4,
        paddingHorizontal: Layout.gapLarge,
        backgroundColor: Colors.artally.white,
        borderWidth: 1,
        borderColor: Colors.artally.action,
    },
    outlineText: {
        fontSize: Layout.textLarge,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.artally.action,
    },
});
