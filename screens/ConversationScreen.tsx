import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import Button from '../components/Button';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Images from '../constants/Images';
import Filler from "../data/Filler";
import { ConversationScreenProps } from '../types';
import NotificationButton from '../components/NotificationButton';
import Message from '../components/Message';

export default function ConversationScreen({ navigation }: ConversationScreenProps) {
  const [messageText, onChangeMessageText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messages}>
        <Message text="Hey! I saw your comment on CityOwls' charmander drawing and wanted to ask--" navigation={navigation} />
        <Message text="Where did you learn how to draw fire?! The glow effect is so lifelike!" navigation={navigation} />
      </View>
      <View style={styles.bottomRow}>
        <Ionicons name="camera-outline" size={25} color={Colors.artally.action} />
        <Ionicons name="image-outline" size={25} color={Colors.artally.action} />
        <Ionicons name="happy-outline" size={25} color={Colors.artally.action} />
        <TextInput
          style={styles.textInput}
          onChangeText={(inputText) => onChangeMessageText(inputText)}
          value={messageText} // was "text"
          placeholder="Send a message..."
          placeholderTextColor={Colors.artally.basicMidLight}
        />
        <Ionicons name="send-outline" size={25} color={Colors.artally.action} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Colors.artally.white,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Layout.gapLarge,
    marginTop: Layout.gapLarge,
  },
  messages: {
    flexDirection: "column",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: Layout.gapLarge,
    width: Layout.window.width,
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
  textInput: {
    borderColor: Colors.artally.basicMidLight,
    borderRadius: Layout.radiusLarge,
    borderWidth: 1,
    fontSize: Layout.textMid,
    color: Colors.artally.basicDark,
    padding: Layout.gapSmall,
    marginHorizontal: Layout.gapSmall,
    width: "70%"
  },
});
