import React, { useState, useCallback } from "react";
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity, // replace a View with this to make the entire view clickable
  // import any other needed React components here
} from "react-native";
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { ProfileHeaderProps } from '../types'; // import any other needed types from types.tsx here
import UserIcon from './UserIcon';
import Filler from '../data/Filler';
import TagArray from './TagArray';
import Button from "../components/Button";
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


const info = () =>
  Alert.alert(
    "",
    "In a real implementation, this would lead to another screen.",
    [
      {
        text: "OK",
        style: "cancel"
      }
    ]
  );

const editMenu = () =>
  Alert.alert(
    "Profile Options",
    "",
    [
      {
        text: "Change profile image",
        onPress: () => info(),
      },
      {
        text: "Edit user tags",
        onPress: () => info(),
      },
      {
        text: "Manage account",
        onPress: () => info(),
      },
      {
        text: "Cancel",
        style: "cancel"
      }
    ]
  );



// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function ProfileHeader({ user, mine, showBio, navigation }: ProfileHeaderProps) {
  const [followText, setFollowText] = useState("Follow");
  const [followType, setFollowType] = useState("active");
  const [following, setFollowing] = useState(false);

  const toggleFollow = () => {
    if (following) {
      setFollowText("Follow");
      setFollowType("active");
      setFollowing(false);
    } else {
      setFollowText("Following");
      setFollowType("outline");
      setFollowing(true);
    }
  }

  const bio = mine ? "hey! just your neighborhood digital artist who's looking to branch into traditional as of late...feel free to reach out if you're in the same boat (or if you just wanna say hi!)" : "Gotta catch 'em all!!... in my Photoshop window...";

  let topRight = [
    <View>
      <TouchableOpacity onPress={() => editMenu()}>
        <Ionicons name="settings-outline" size={25} color={Colors.artally.basicDark} />
      </TouchableOpacity>
    </View>];
  let chatbubbles;

  if (!mine) {
    topRight = ([
      <View style={styles.row}>
        <Button title={followText} type={followType} navigation={navigation} onPress={toggleFollow} />
      </View>
    ]);
    chatbubbles = (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Conversation")}>
          {/*<Button title="Message" type="outline" navigation={navigation} onPress={null} />*/}
          <View style={styles.button}>
            <Ionicons name="chatbubbles-outline" size={20} color={Colors.artally.action} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.aboveTags}>
        <UserIcon user={user} size="large" navigation={navigation} />

        <View style={styles.nextToIcon}>
          <View style={styles.topRight}>
            {topRight}
          </View>
          <View style={styles.textElements}>
            <View style={styles.row}>
              <Text style={styles.username}>{user.username}</Text>
              {chatbubbles}
            </View>
            <View style={styles.stats}>
              <Text style={styles.text}>{user.posts.length} posts</Text>
              <Text style={styles.text}>{user.followers.length} followers</Text>
              <Text style={styles.text}>{user.numPoints} points</Text>
            </View>
          </View>
        </View>

      </View>
      { showBio ? <Text style={styles.bio}>{bio}</Text> : null }
      <TagArray tags={user.tags} size="small" navigation={navigation} />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: Layout.gapSmall,
  },
  stats: {
    flexDirection: "row",
  },
  aboveTags: {
    flexDirection: "row",
    margin: Layout.gapSmall,
    alignContent: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    //backgroundColor: "gray",
  },
  nextToIcon: {
    flexDirection: "column",
    flex: 1,
  },
  topRight: {
    alignSelf: 'flex-end',
  },
  textElements: {
    marginHorizontal: Layout.gapSmall,
  },
  text: {
    fontSize: Layout.textMid,
    fontWeight: 'normal',
    color: Colors.artally.basicMid,
    marginRight: Layout.gapSmall,
  },
  username: {
    fontSize: Layout.textLarge,
    fontWeight: 'bold',
    color: Colors.artally.basicDark,
  },
  row: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignContent: "flex-end",
    alignItems: "flex-end"
  },
  button: {
    paddingHorizontal: Layout.gapSmall,
  },
  bio: {
    fontSize: Layout.textMid,
    fontWeight: 'normal',
    color: Colors.artally.basicDark,
    marginLeft: Layout.gapSmall,
    marginBottom: Layout.gapSmall,
  }
  // edit those styles or define more here!
});
