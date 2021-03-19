import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  Alert,
  TouchableOpacity, // replace a View with this to make the entire view clickable
  // import any other needed React components here
} from "react-native";
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import TagArray from '../components/TagArray';
import Filler from "../data/Filler";
import { PostFooterProps, Post } from '../types'; // import any other needed types from types.tsx here
import StatusTag from '../components/StatusTag';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


const editMenu = () =>
  Alert.alert(
    "Post Options",
    "",
    [
      {
        text: "Edit post",
        onPress: () => info(),
      },
      {
        text: "Create update",
        onPress: () => info(),
      },
      {
        text: "Mark as closed",
        onPress: () => info(),
      },
      {
        text: "Cancel",
        style: "cancel"
      }
    ]
  );

const info = () =>
  Alert.alert(
    "Success!",
    "In a real implementation, this would lead to another screen.",
    [
      {
        text: "OK",
        style: "cancel"
      }
    ]
  );


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function PostFooter({ post, navigation }: PostFooterProps) {
  let editButton;
  if (post.user == "nifty_salamander") {
    editButton = (
      <TouchableOpacity onPress={editMenu}>
        <Ionicons name="pencil" size={15} color={Colors.artally.action} />
      </TouchableOpacity>
    );
  } // ignore this lol working on it

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{post.title}</Text>
        <StatusTag status={post.status} />
        {editButton}
      </View>
      <Text style={styles.description}>{post.description}</Text>
      <TagArray tags={Filler.post.tags} size="small" navigation={navigation} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    margin: Layout.gapSmall,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    color: Colors.artally.basicDark,
  },
  description: {
    fontSize: 12,
    fontWeight: 'normal',
    marginLeft: 8,
    marginBottom: 16,
    color: Colors.artally.basicDark,
  },
  // edit those styles or define more here!
});
