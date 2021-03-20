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


const extractUser = (data: any) => {
  let dUser: User = {
    username: data.username,
    icon: data.icon,
    tags: data.tags,
    numPoints: data.numPoints,
    posts: data.posts,
    following: data.following,
    followers: data.followers,
  }
  return dUser;
}

export default function ProfileScreen({ user, navigation }: ProfileScreenProps) {
  const [loading, setLoading] = useState(false);
  const defaultUser = Users.saturno_22;

  let fsUser: User = defaultUser;
  var docRef = firestore.collection("users").doc(defaultUser.username);
  docRef.get().then((doc) => {
    if (doc.exists) {
      fsUser = extractUser(doc.data());
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

  return (
    <View>
      <ProfileHeader user={fsUser} navigation={navigation} mine={false} />
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
});
