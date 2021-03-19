import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,  // replace a View with this to make the entire view clickable
  // import any other needed React components here
} from "react-native";
import Image from 'react-native-scalable-image';
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { MessagePreviewProps } from '../types'; // import any other needed types from types.tsx here
import Filler from '../data/Filler';
import UserIcon from './UserIcon';
import Images from '../constants/Images';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function MessagePreview({ user, text, timestamp, navigation }: MessagePreviewProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Conversation")}>
      <UserIcon user={user} size="small" navigation={navigation} />
      <View style={styles.body}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Text style={styles.text}>{timestamp}</Text>
    </TouchableOpacity>
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
    padding: Layout.gapSmall,
    backgroundColor: Colors.artally.white,
    borderBottomWidth: 1,
    borderColor: Colors.artally.basicLight,
  },
  buttons: {
    flex: 1,
  }
});
