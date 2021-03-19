import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import Button from '../components/Button';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Images from '../constants/Images';
import Filler from "../data/Filler";
import { UploadTabParamList } from '../types';


export default function UploadTabScreen({ navigation }: UploadTabParamList) {
  const [title, onChangeTitle] = React.useState("");
  const [tagStr, onChangeTagStr] = React.useState("");
  const [description, onChangeDescription] = React.useState("");
  let tags = [];


  const confirm = () =>
    Alert.alert(
      "Post uploaded!",
      "",
      [
        {
          text: "View post",
          onPress: () => navigation.navigate("Thread"),
        },
        {
          text: "View my profile",
          onPress: () => navigation.navigate("MyProfile"),
        },
        {
          text: "OK",
          style: "cancel"
        }
      ]
    );


  return (
    <View style={styles.container}>
      <View style={styles.uploadBox}>
        <Text style={styles.title}>Upload your work...</Text>
        <Text style={styles.text}>File types supported:</Text>
        <Text style={styles.text}>Apple photos (HEIC), JPG, PNG, GIF</Text>
        <View style={styles.buttons}>
          <Ionicons name="camera-outline" size={30} color={Colors.artally.action} />
          <Ionicons name="image-outline" size={30} color={Colors.artally.action} />
          <Ionicons name="link-outline" size={30} color={Colors.artally.action} />
          <Ionicons name="document-outline" size={30} color={Colors.artally.action} />
        </View>
      </View>
      <View style={styles.inputBoxes}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(inputText) => onChangeTitle(inputText)}
          value={title} // was "text"
          placeholder="What is your question about?"
        />
        <Text style={styles.title}>Tags</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(inputText) => onChangeTagStr(inputText)}
          onSubmitEditing={() => tags = tagStr.split("\\s*,\\s*")}
          value={tagStr} // was "text"
          placeholder="ex. traditional, illustration, perspective"
        />
        <Text style={styles.title}>Description</Text>
        <TextInput
          style={styles.textInputTall}
          multiline={true}
          onChangeText={(inputText) => onChangeDescription(inputText)}
          value={description} // was "text"
          placeholder="Any additional details?"
        // NEED TO MAKE KEYBOARD DISMISS!!!!
        />
      </View>
      <Button onPress={() => confirm()} title="Post" type={"active"} navigation={navigation} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: Layout.gapLarge,
    width: "100%",
    height: "100%",
  },
  uploadBox: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.artally.basicLight,
    borderRadius: Layout.radiusLarge,
    width: Layout.window.width * 0.90,
    paddingVertical: Layout.gapLarge,
  },
  inputBoxes: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "95%",
    //marginHorizontal: Layout.gapLarge * 2,
    marginBottom: Layout.gapLarge * 2,
  },
  textInput: {
    width: "100%",
    borderColor: Colors.artally.basicMidLight,
    borderRadius: Layout.radiusLarge,
    borderWidth: 1,
    fontSize: Layout.textMid,
    color: Colors.artally.basicDark,
    padding: Layout.gapSmall,
  },
  textInputTall: {
    height: 120,
    width: "100%",
    borderColor: Colors.artally.basicMidLight,
    borderRadius: Layout.radiusLarge,
    borderWidth: 1,
    fontSize: Layout.textMid,
    color: Colors.artally.basicDark,
    padding: Layout.gapSmall,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.artally.basicLight,
    margin: Layout.gapLarge,
  },
  title: {
    fontSize: Layout.textLarge,
    color: Colors.artally.basicDark,
    fontWeight: "bold",
    marginTop: Layout.gapLarge,
    marginBottom: Layout.gapSmall,
  },
  text: {
    fontSize: Layout.textMid,
    color: Colors.artally.basicDark,
  }
});
