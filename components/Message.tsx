import * as React from 'react';
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
import { Users } from '../data/Users2';
import { MessageProps } from '../types'; // import any other needed types from types.tsx here
import UserIcon from './UserIcon';
import Filler from '../data/Filler';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function Message({ text, navigation }: MessageProps) {
  return (
    <View style={styles.container}>
      <UserIcon user={Users.saturno_22} size="small" navigation={navigation}/>
      <View style={styles.message}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: Layout.gapLarge,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  message: {
    backgroundColor: Colors.artally.basicLight,
    borderTopRightRadius: Layout.radiusLarge,
    borderBottomRightRadius: Layout.radiusLarge,
    borderTopLeftRadius: Layout.radiusLarge,
    borderBottomLeftRadius: 0,
    marginTop: Layout.gapSmall,
    marginLeft: Layout.gapSmall,
    paddingVertical: Layout.gapSmall,
    paddingHorizontal: Layout.gapLarge,
    maxWidth: "50%",
  },
  text: {
    fontSize: Layout.textMid,
    fontWeight: 'normal',
    color: Colors.artally.basicDark,
  }
});
