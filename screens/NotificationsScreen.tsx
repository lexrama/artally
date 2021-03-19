import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Notification from '../components/Notification';
import { Text, View } from '../components/Themed';
import Filler from '../data/Filler';
import { NotificationScreenProps } from '../types'

export default function NotificationScreen({ navigation }: NotificationScreenProps) {
  return (
    <View style={styles.container}>
      <Notification post={Filler.post} user={Filler.user} text="It looks good to me! I think the sha..." timestamp="5h" navigation={navigation}/>
      <Notification post={Filler.post} user={Filler.user} text="I really like these colors! the reddi..." timestamp="6h" navigation={navigation}/>
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
