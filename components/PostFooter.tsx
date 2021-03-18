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
import TagArray from '../components/TagArray';
import Filler from "../data/Filler";
import { PostFooterProps, Post } from '../types'; // import any other needed types from types.tsx here
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function PostFooter({ post, navigation }: PostFooterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.description}>{post.description}</Text>
      <TagArray tags={Filler.post.tags} navigation={navigation} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    margin: Layout.gapSmall,
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
