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


export default function ProfileScreen({ navigation }: ProfileScreenProps) {
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
});
