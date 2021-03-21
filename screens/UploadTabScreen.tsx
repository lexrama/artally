import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform
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
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import Image from 'react-native-scalable-image';


const sorry = () =>
  Alert.alert(
    "Can't upload image",
    "Sorry, we need camera roll permissions to make this work!",
    [
      {
        text: "OK",
        style: "cancel"
      }
    ]
  );

export default function UploadTabScreen({ navigation }: UploadTabParamList) {
  const [title, onChangeTitle] = React.useState("");
  const [tagStr, onChangeTagStr] = React.useState("");
  const [description, onChangeDescription] = React.useState("");
  const [image, setImage] = useState(Images.izipizi.uri);
  const [hasImage, setHasImage] = useState(false);
  let tags = [];


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          sorry();
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.cancelled) {
      //let chosenImage = require(result.uri);
      setImage(result.uri);
      setHasImage(true);
    }
  };



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

  const alert = () =>
    Alert.alert(
      "Incomplete post",
      "Your post needs a title and an image.",
      [
        {
          text: "OK",
          style: "cancel"
        }
      ]
    );



  const submitPost = () => {
    onChangeTitle("");
    onChangeDescription("");
    onChangeTagStr("");
    setHasImage(false);
    confirm();
  }

  const activePostButton = <Button onPress={() => submitPost()} title="Post" type={"active"} navigation={navigation} />;
  const inactivePostButton = <Button onPress={() => alert()} title="Post" type={"inactive"} navigation={navigation} />;
  const uploadInfo = [
    <Text style={styles.title}>Upload your work...</Text>,
    <Text style={styles.text}>File types supported:</Text>,
    <Text style={styles.text}>Apple photos (HEIC), JPG, PNG, GIF</Text>
  ];

  return (
    <View style={styles.container}>
      <View style={styles.uploadBox}>
        {hasImage ? <Image source={{uri: image}} height={150} style={{ marginTop: Layout.gapLarge*1.5 }}/> : uploadInfo }
        <View style={styles.buttons}>
          <View style={styles.button}>
          <Ionicons name="document" size={30} color={Colors.artally.basicMidLight} />
          </View>
          <View style={styles.button}>
          <Ionicons name="link" size={30} color={Colors.artally.basicMidLight} />
          </View>
          <View style={styles.button}>
          <Ionicons name="camera" size={30} color={Colors.artally.basicMidLight} />
          </View>
          <TouchableOpacity onPress={pickImage} style={styles.button}>
            <Ionicons name="image" size={30} color={Colors.artally.action} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputBoxes}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(inputText) => onChangeTitle(inputText)}
          value={title} // was "text"
          placeholder="What is your question about? (Required)"
          placeholderTextColor={Colors.artally.basicMidLight}
        />
        <Text style={styles.title}>Tags</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(inputText) => onChangeTagStr(inputText)}
          onSubmitEditing={() => tags = tagStr.split("\\s*,\\s*")}
          value={tagStr} // was "text"
          placeholder="ex. traditional, illustration, perspective"
          placeholderTextColor={Colors.artally.basicMidLight}
        />
        <Text style={styles.title}>Description</Text>
        <TextInput
          style={styles.textInputTall}
          multiline={true}
          onChangeText={(inputText) => onChangeDescription(inputText)}
          value={description} // was "text"
          placeholder="Any additional details?"
          placeholderTextColor={Colors.artally.basicMidLight}
        // NEED TO MAKE KEYBOARD DISMISS!!!!
        />
      </View>
      { (title.length == 0 || hasImage == false) ? inactivePostButton : activePostButton}
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
    marginBottom: Layout.gapLarge * 1.25,
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
    height: 60,
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
  button: {
    marginHorizontal: Layout.gapSmall / 2,
    backgroundColor: Colors.artally.basicLight,
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
