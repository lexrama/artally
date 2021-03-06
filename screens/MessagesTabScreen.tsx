import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Users } from '../data/Users2';
import MessagePreview from "../components/MessagePreview";
import Filler from '../data/Filler';
import { MessagesTabParamList } from '../types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MessagesTabScreen({ navigation }: MessagesTabParamList) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <MessagePreview user={Users.saturno_22} text="Where did you learn how to draw fire?! The glow effect is so lifelike!" timestamp="5h" navigation={navigation} />
      </ScrollView>
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
  scroll: {
    flex: 1,
    width: "100%",
  }
});
