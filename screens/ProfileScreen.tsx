import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { Posts } from '../data/Posts';
import firestore from "../firebase";
import { Post, ProfileScreenProps } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';
import ProfileHeader from '../components/ProfileHeader';
import Feed from '../components/Feed';
import { Text, View } from '../components/Themed';
import Filler from '../data/Filler';

export default function MyProfileTabScreen({ navigation }: ProfileScreenProps) {
  const [loading, setLoading] = useState(false);
  
  return (
    <View style={styles.container}>
      <ProfileHeader user={Filler.user} navigation={null}/>
      <Feed
        feedItems={Posts} // was feedData, eventually want this to be fsPosts
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
