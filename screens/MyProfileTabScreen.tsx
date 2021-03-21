import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { Posts } from '../data/Posts';
import firestore from "../firebase";
import { Post, ProfileScreenProps, User } from '../types';
import { Users } from '../data/Users2';
import EditScreenInfo from '../components/EditScreenInfo';
import ProfileHeader from '../components/ProfileHeader';
import Feed from '../components/Feed';
import Notification from '../components/Notification';
import { Text, View } from '../components/Themed';
import Filler from '../data/Filler';
import DBHelper from '../data/DBHelper';
import PostCard from "../components/PostCard";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";


export default function MyProfileTabScreen({ navigation }: ProfileScreenProps) {
  const [loading, setLoading] = useState(false);

  let fsUser: User = Users.nifty_salamander;
  var docRef = firestore.collection("users").doc("nifty_salamander");
  docRef.get().then((doc) => {
    if (doc.exists) {
      fsUser = DBHelper.extractUser(doc.data());
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

  const renderItem = (item: Post) => { // should take in a Post
    return (<PostCard post={item} header={false} clickable={true} navigation={navigation} />);
  };
/*
  return (
      <View>
        <ProfileHeader user={fsUser} navigation={navigation} mine={true} />
        <FlatList style={styles.list}
          data={fsUser.posts} // was feedItems
          renderItem={({ item }) => renderItem(item)}
          //keyExtractor={(item, index) => item.id.toString}
        />
      </View>
  );
  */
  
  return (
    <View>
      <ProfileHeader user={fsUser} navigation={navigation} mine={true} />
      <Feed
        feedItems={fsUser.posts} // was feedData, eventually want this to be fsPosts
        header={false}
        loading={loading}
        navigation={navigation}
      />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  list: {
    backgroundColor: Colors.artally.basicLight,
    borderColor: "#27277a",
    //borderTopWidth: 1,
  },
  spacer: {
    color: Colors.artally.basicDark,
    fontSize: Layout.textMid,
    textAlign: "center",
    backgroundColor: Colors.artally.basicLight,
    padding: Layout.gapLarge * 5,
    borderWidth: 1,
    borderColor: Colors.artally.basicMidLight,
    width: Layout.window.width,
}
});
