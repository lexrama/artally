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
import Colors from '../constants/Colors'; // see this and the next 2 files for our defined constants
import Layout from '../constants/Layout';
import Images from '../constants/Images';
import { Posts } from '../data/Posts'; // array of all posts
import { Users } from '../data/Users'; // array of all users
import { Comments } from '../data/Comments'; // array of all comments
import Filler from '../data/Filler'; // for a placeholder, use Filler.user, Filler.post, or Filler.comment
import { MyComponentProps, Post, User, Comment } from '../types'; // import any other needed types from types.tsx here
// to use a component from this project, add: import AnotherComponent from '../components/AnotherComponent';


// define your props in types.tsx (see MyComponentProps in that file for an example)
export default function MyComponent({ myString, myNumber, myBoolean, navigation }: MyComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here's my string: {myString}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.artally.white,
    margin: Layout.gapSmall,
  },
  text: {
    fontSize: Layout.textMid,
    fontWeight: 'normal',
    color: Colors.artally.basicDark,
  }
  // edit these styles or define more here!
});
