import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import { Posts } from '../data/Posts';
import firestore from "../firebase";
import { Post, ProfileScreenProps } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';
import ProfileHeader from '../components/ProfileHeader';
import Feed from '../components/Feed';
import Notification from '../components/Notification';
import { Text, View } from '../components/Themed';
import Filler from '../data/Filler';

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  const [loading, setLoading] = useState(false);
  
  return (
    <SafeAreaView>
      <ProfileHeader user={Filler.user} navigation={navigation}/>
      <Feed
        feedItems={Posts} // was feedData, eventually want this to be fsPosts
        header={false}
        loading={loading}
        navigation={navigation}
      />
    </SafeAreaView>
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
