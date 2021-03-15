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
import { FeedItemProps } from "../types";


export default function FeedItem(props: FeedItemProps) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => props.navigation.navigate('Thread', props)}>
      <View style={styles.header}>
        <Image source={require("../assets/images/avatar.png")} />
        <Text style={styles.username}>{props.item.username}</Text>
      </View>
      <Image source={require("../assets/images/togepi.jpeg")} />
      <Text style={styles.title}>{props.item.title}</Text>
      <Text style={styles.body}>{props.item.description}</Text>
      <Text style={styles.tags}>#tag1  #tag2  #tag3  #tag4  #tag5</Text>
    </TouchableOpacity>
  );

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
    borderWidth: 0,
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
    borderTopWidth: 0,
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 12,
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
  username: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  tags: {
    fontSize: 12,
    fontWeight: 'normal',
    marginLeft: 8,
    color: 'green',
  },

});
