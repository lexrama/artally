import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity, // replace a View with this to make the entire view clickable
  // import any other needed React components here
} from "react-native";
import { Text, View } from '../components/Themed';
import Feed from '../components/Feed';
import FullWidthImage from '../components/FullWidthImage';
import { ThreadScreenProps, Post } from '../types';
import Comment from "./Comment";
import Images from "../constants/Images";
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Filler from "../data/Filler";
import { PostCardProps } from '../types'; // import any other needed types from types.tsx here
import PostHeader from './PostHeader';
import TagArray from './TagArray';
import PostFooter from './PostFooter';
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function PostCard({ post, header, clickable, navigation }: PostCardProps) {

  let headerItem = header ? <PostHeader post={post} navigation={navigation} /> : <View style={styles.spacer}></View>;

  const threadProps: ThreadScreenProps = {
    postID: post.id,
    navigation: navigation,
  }

  if (clickable) {
    return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Thread", {threadProps})}>
        {headerItem}
        <FullWidthImage source={post.image} size="full" />
        <PostFooter post={post} navigation={navigation} />
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.container}>
        {headerItem}
        <FullWidthImage source={post.image} size="full" />
        <PostFooter post={post} navigation={navigation} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderColor: Colors.artally.basicLight,
    borderTopWidth: 1,
    //paddingBottom: Layout.gapSmall,
    backgroundColor: Colors.artally.white,
  },
  spacer: {
    backgroundColor: Colors.artally.white,
    height: Layout.gapLarge,
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  tags: {
    fontSize: 12,
    fontWeight: 'normal',
    marginLeft: 8,
    marginBottom: 16,
    color: 'green',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
  },
  body: {
    fontSize: 12,
    fontWeight: 'normal',
    marginLeft: 8,
    marginBottom: 8,
  },
  // edit those styles or define more here!
});
