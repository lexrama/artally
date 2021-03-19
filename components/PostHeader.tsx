import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  Alert,
  TouchableOpacity,
  TouchableOpacityBase, // replace a View with this to make the entire view clickable
  // import any other needed React components here
} from "react-native";
import { Text, View } from './Themed';
import { Users } from '../data/Users2';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Images from '../constants/Images';
import Filler from "../data/Filler";
import { PostHeaderProps, User } from '../types'; // import any other needed types from types.tsx here
import UserIcon from './UserIcon';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function PostHeader({ post, navigation }: PostHeaderProps) {

  let user: User = Users.saturno_22;
  if (post.user == "nifty_salamander") {
    user = Users.nifty_salamander;
  } else if (post.user == "CityOwls") {
    user = Users.cityowls;
  } else if (post.user == "izipizi") {
    user = Users.izipizi;
  }

  const curate = () =>
    Alert.alert(
      "Got it!",
      "We'll curate your feed.",
      [
        {
          text: "OK",
        },
        {
          text: "Undo",
          style: "cancel"
        },
      ]
    );

  const block = () =>
    Alert.alert(
      user.username + " has been blocked.",
      "Their posts won't appear on your feed or in your search results anymore.",
      [
        {
          text: "OK",
        },
        {
          text: "Undo",
          style: "cancel"
        },
      ]
    );

  const report = () =>
    Alert.alert(
      "Report sent for evaluation.",
      "(In a real implementation, there would be a longer process here.)",
      [
        {
          text: "OK",
          style: "cancel"
        },
      ]
    );

  const createAlert = () =>
    Alert.alert(
      "Post Options",
      "",
      [
        {
          text: "Show me more like this",
          onPress: () => curate(),
        },
        {
          text: "Show me less like this",
          onPress: () => curate(),
        },
        {
          text: "Report post",
          onPress: () => report(),
        },
        {
          text: "Block user",
          onPress: () => block(),
        },
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    );

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <UserIcon user={user} size={"small"} navigation={navigation} />
        <Text style={styles.username}>{user.username}</Text>
      </View>
      <TouchableOpacity style={styles.right} onPress={createAlert}>
        <Ionicons name="ellipsis-vertical" size={20} color={Colors.artally.basicDark} />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  left: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.artally.white,
    padding: Layout.gapSmall,
  },
  right: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.artally.white,
    padding: Layout.gapSmall,
  },
  username: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
    color: Colors.artally.basicDark,
  },
});
