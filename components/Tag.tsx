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
import { TagProps } from '../types'; // import any other needed types from types.tsx here
// to use a component from this project, add: import MyComponent from '../components/MyComponent';


// see types.tsx or the doc for the data types of the props; let me know if you need to change them
export default function Tag({ text, size, navigation }: TagProps) {
  if (size=="large") {
    return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Results")}>
        <Text style={styles.textLarge}>#{text}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Results")}>
      <Text style={styles.textSmall}>#{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.artally.tag,
    borderRadius: Layout.radiusLarge,
    marginRight: Layout.gapSmall,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  textSmall: {
    fontSize: Layout.textSmall,
    fontWeight: 'bold',
    color: Colors.artally.white,
  },
  textLarge: {
    fontSize: Layout.textLarge,
    fontWeight: 'bold',
    color: Colors.artally.white,
    paddingVertical: 2,
    paddingHorizontal: 5,
  }
});
