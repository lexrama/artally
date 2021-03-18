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
import Images from '../constants/Images';
import Filler from "../data/Filler";
import { PostHeaderProps, User } from '../types'; // import any other needed types from types.tsx here
import UserIcon from './UserIcon';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function PostHeader({ post, navigation }: PostHeaderProps) {
  return (
    <View style={styles.container}>
      <UserIcon user={Filler.user} size={"small"} navigation={navigation} />
      <Text style={styles.username}>username</Text>
      <Ionicons name="ellipsis-vertical" size={20} color={Colors.artally.basicDark} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
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
