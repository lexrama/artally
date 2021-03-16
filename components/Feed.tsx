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
import { FeedProps, FeedItemData, Post, User, Comment } from "../types";
import firebase from "firebase";
import firestore from "../firebase";


const getPosts = async () => {
  let fsPostsRef = firestore.collection("posts");
  let fsPosts = await fsPostsRef.get();
}

export default function Feed({ feedItems, loading, navigation }: FeedProps) {

  const fsPosts = getPosts;

  const renderItem = (item: Post) => {
    return (
      <FeedItem
        post={item}
        navigation={navigation}
      />
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
      <SafeAreaView style={styles.container}>
        <FlatList style={styles.list}
          data={feedItems} // was feedItems
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }

}


const styles = StyleSheet.create({

  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  headline: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#27277a",
    fontFamily: "Georgia",
    paddingBottom: 7
  },

  snippet: {
    fontSize: 14,
    paddingBottom: 7,
    fontFamily: "Georgia",
  },

  meta: {
    fontSize: 12,
    color: "gray",
  },

  listItem: {
    borderColor: "#27277a",
    borderWidth: 1,
    padding: 13,
    marginTop: 7,
    marginLeft: 7,
    marginRight: 7,
    backgroundColor: "white",
    borderRadius: 10,
  },

  list: {
    backgroundColor: "#e4e4f0",
    borderColor: "#27277a",
    borderTopWidth: 1,
  },

});