import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { Posts } from '../data/Posts';
import firestore from "../firebase";
import { Post, ProfileScreenProps } from '../types';
import { Users } from '../data/Users2';
import EditScreenInfo from '../components/EditScreenInfo';
import ProfileHeader from '../components/ProfileHeader';
import Feed from '../components/Feed';
import Notification from '../components/Notification';
import { Text, View } from '../components/Themed';
import Filler from '../data/Filler';

export default function ProfileScreen({ user, navigation }: ProfileScreenProps) {
  const [loading, setLoading] = useState(false);
  const defaultUser = Users.saturno_22;

  //console.log("PROFILESCREEN: ", user);

  
  let userPosts: Post[] = [];
  /*
  if (user.username == "saturno_22") {
    Users.saturno_22.posts.forEach(post =>
      userPosts.push(post)
    );
  } else if (user.username == "izipizi") {
    Users.izipizi.posts.forEach(post =>
      userPosts.push(post)
    );
  } else if (user.username == "cityowls") {
    Users.cityowls.posts.forEach(post =>
      userPosts.push(post)
    );
  } else {
    Users.nifty_salamander.posts.forEach(post =>
      userPosts.push(post)
    );
  }
  */

  return (
    <View>
      <ProfileHeader user={defaultUser} navigation={navigation} mine={false} />
      <Feed
        feedItems={defaultUser.posts} // was feedData, eventually want this to be fsPosts
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
