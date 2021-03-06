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
  TouchableOpacity
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import FeedItem from '../components/FeedItem';
import PostCard from '../components/PostCard';
import { FeedProps, FeedItemData, Post, User, Comment } from "../types";
import firebase from "firebase";
import firestore from "../firebase";
//import { Colors } from "react-native/Libraries/NewAppScreen";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";


const getPosts = async () => {
  let fsPostsRef = firestore.collection("posts");
  let fsPosts = await fsPostsRef.get();
}

export default function Feed({ feedItems, header, loading, navigation }: FeedProps) {

  const renderItem = (item: Post) => { // should take in a Post
    return (
      <PostCard post={item} header={header} clickable={true} navigation={navigation} />
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={feedItems} // was feedItems
          renderItem={({ item }) => renderItem(item)}
          //keyExtractor={(item, index) => item.id.toString}
        />
        <View style={styles.spacer}></View>
      </View>
    );
  }

}


const styles = StyleSheet.create({

  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    backgroundColor: Colors.artally.white,
    borderColor: "#27277a",
    //borderTopWidth: 1,
  },
  spacer: {
    color: Colors.artally.basicDark,
    fontSize: Layout.textMid,
    textAlign: "center",
    backgroundColor: Colors.artally.basicLight,
    padding: Layout.gapLarge * 3,
    borderWidth: 1,
    borderColor: Colors.artally.basicMidLight,
    width: Layout.window.width,
}

});