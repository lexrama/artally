import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Notification from '../components/Notification';
import { Users } from '../data/Users2';
import { Text, View } from '../components/Themed';
import Filler from '../data/Filler';
import { NotificationScreenProps } from '../types'

export default function NotificationScreen({ navigation }: NotificationScreenProps) {
  return (
    <View style={styles.container}>
      <Notification post={Users.nifty_salamander.posts[1]} user={Users.saturno_22} text="It looks good to me! I think the sha..." timestamp="5h" navigation={navigation}/>
      <Notification post={Users.nifty_salamander.posts[1]} user={Users.cityowls} text="I really like these colors! the reddi..." timestamp="6h" navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
