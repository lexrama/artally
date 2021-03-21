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


const info = () =>
  Alert.alert(
    "",
    "In a real implementation, this would lead to another screen.",
    [
      {
        text: "OK",
        style: "cancel"
      }
    ]
  );

  const close = () =>
  Alert.alert(
    "Success!",
    "In a real implementation, this would change the status tag on this post.",
    [ 
      {
        text: "Undo",
        style: "cancel"
      },
      {
        text: "OK",
      },
    ]
  );


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function PostFooter({ post, navigation }: PostFooterProps) {

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
        onPress: () => navigation.navigate("Upload"),
      },
      {
        text: "Mark as closed",
        onPress: () => close(),
      },
      {
        text: "Cancel",
        style: "cancel"
      }
    ]
  );


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
      <Text style={styles.meta}>Posted {post.timestamp} | {post.comments.length} comments</Text>
      <Text style={styles.description}>{post.description}</Text>
      <TagArray tags={post.tags} size="small" navigation={navigation} />
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
    fontSize: Layout.textLarge,
    fontWeight: 'bold',
    padding: Layout.gapSmall,
    color: Colors.artally.basicDark,
  },
  description: {
    fontSize: Layout.textMid,
    fontWeight: 'normal',
    marginLeft: Layout.gapSmall,
    marginBottom: Layout.gapLarge,
    color: Colors.artally.basicDark,
  },
  meta: {
    fontSize: Layout.textSmall,
    fontWeight: 'normal',
    color: Colors.artally.basicMid,
    marginLeft: Layout.gapSmall,
    marginBottom: Layout.gapSmall,
  }
  // edit those styles or define more here!
});
