import React, { useState, useCallback } from "react";
import PropTypes from "prop-types"; //consider using this!
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  Linking,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import ThreadScreen from "../Screens/ThreadScreen";
import { FeedItemProps, Post, ThreadScreenProps } from "../types";
import Images from "../constants/Images";
import Filler from "../data/Filler";
import PostCard from "./PostCard";

export default function FeedItem({post, header, navigation}: FeedItemProps) {
  const threadProps: ThreadScreenProps = {
    post: post,
    navigation: navigation,
  }
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Thread', threadProps)}>
      <PostCard post={post} header={header} navigation={navigation} />
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  container: {
  },
});
