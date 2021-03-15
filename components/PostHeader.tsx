import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity, // replace a View with this to make the entire view clickable
  // import any other needed React components here
} from "react-native";
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { PostHeaderProps } from '../types'; // import any other needed types from types.tsx here
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function PostHeader({ user, post, navigation }: PostHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a post header!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    width: '100%',
    margin: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
  }
  // edit those styles or define more here!
});
