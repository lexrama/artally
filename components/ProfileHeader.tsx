import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  SafeAreaView,
  Image,
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


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function ProfileHeader({ user, mine, navigation }: ProfileHeaderProps) {

  let topLeft = (<Button title="Follow" type="active" navigation={navigation} onPress={null}/>);
  if (mine) {
    topLeft = (<Ionicons name="settings-outline" size={25} color={Colors.artally.basicDark} />);
  }

  return (
    <View style={styles.container}>
      <View style={styles.aboveTags}>
        <UserIcon user={user} size="large" navigation={navigation} />
        <View style={styles.nextToIcon}>
        <View style={styles.topRight}>{topLeft}</View>
        <View style={styles.textElements}>
          <Text style={styles.username}>{user.username}</Text>
          <View style={styles.stats}>
            <Text style={styles.text}>{user.posts.length} posts</Text>
            <Text style={styles.text}>{user.followers.length} followers</Text>
            <Text style={styles.text}>{user.numPoints} points</Text>
          </View>
        </View>
        </View>
      </View>
      <TagArray tags={user.tags} navigation={navigation} />
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
    alignContent: "center",
    justifyContent: "center",
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
    color: Colors.artally.basicDark,
    marginRight: Layout.gapSmall,
  },
  username: {
    fontSize: Layout.textLarge,
    fontWeight: 'bold',
    color: Colors.artally.basicDark,
  },
  // edit those styles or define more here!
});
