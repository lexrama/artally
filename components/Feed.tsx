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
import { FeedProps, FeedItemData } from "../types";

export default function Feed(props: FeedProps) {
  const defaultProps = { articles: [] };
  {/*const Thread = props.Thread;*/}
  const navigation = props.navigation;

  const propTypes = {
    articles: PropTypes.array,
  };

  const renderItem = (item: FeedItemData) => {
    return (
      <FeedItem
        item={item}
        navigation={navigation}
      />
    );
  };

  if (props.loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList style={styles.list}
          data={props.feedItems}
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